<script setup>
import { reactive, ref, onMounted } from 'vue'
import { getDatas } from '../composables/serviceAjax'
import { getLabels, countDatas } from '../composables/utilsApp.js'
import { aleatoire, densite } from '../composables/commonChart.js'
import { PolarArea } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

let propChart = defineProps({
  chartId: { type: String, default: 'polar-chart' }, // Id du graphique
  datasetIdKey: { type: String, default: 'label' }, // id du dataSet
  width: { type: Number, default: 500 }, // Hauteur du graphe
  height: { type: Number, default: 500 }, // Largeur du graphe
  cssClasses: { type: String, default: '' }, // Classes css utilisées
  styles: { type: Object, default: () => { } }, // Styles utilisés
  plugins: { type: Object, default: () => { } }  // plugins utilisés
})

let chartData = reactive({
  labels: [],
  datasets: [{}]
})

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      text: null,
      display: true
    }
  }
})

let listeDatas = ref()

let modeSelected = ref()
modeSelected.value = false

let baseColor = ref()

const selectMode = () => {
  let bgColor = null
  let bdColor = null

  if (modeSelected.value) {
    [bgColor, bdColor] = aleatoire(chartData.labels)
  } else {
    [bgColor, bdColor] = densite(baseColor.value, chartData.datasets[0].data)
  }
  chartData.datasets[0].backgroundColor = bgColor
  chartData.datasets[0].borderColor = bdColor
  chartData.datasets[0].borderWidth = 1
}

const selectDatas = async()=>{
  await getDatas()
  .then (response =>{
    listeDatas.value = response.records
    console.log("test", listeDatas)
    chartOptions.plugins.title.text = "Nombre d'opérateurs actifs chaque année"
    chartData.labels = getLabels(listeDatas.value, 'fields.annee#1')
    chartData.datasets[0].data = countDatas(listeDatas.value, chartData.labels, 'fields.annee#1')
    baseColor.value = 'rgba(0,0,255,#deg#)'
    selectMode()
  })
}

onMounted( async() =>{
  await selectDatas()
})
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <form class="navbar-nav ml-auto">
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1" v-model="modeSelected"
            @change="selectMode">
          <label class="custom-control-label" for="customSwitch1">
            dégradé/aléatoire
          </label>
        </div>
      </form>
    </nav>
    <PolarArea class="" :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
      :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
      :height="height" />
  </div>
</template>


<style scoped>
.titre{
  text-align:center;
}

.custom-control-label{
  color:#8a9da0
}
</style>