<script setup>
    import { reactive, ref, onMounted } from 'vue';

    // Import d'un graphique type barChart
    import { Bar } from 'vue-chartjs'

    // Import des objets du graphique de la bibliothèque ChartJs
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    // Eléments utilisés par notre graphique
    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


    // Propriétés du graphique Utilisés dans le template (props)
    // On définit pour chacune son type de données et sa valeur par défaut
    // On peut utiliser une grande variété de types, voire des objets
    const propChart = defineProps({
        chartId:            { type: String,         default: 'bar-chart'      }, // Id du graphique
        datasetIdKey:       { type: String,         default: 'label'          }, // id du dataSet
        width:              { type: Number,         default: 350              }, // Largeur du graphe
        height:             { type: Number,         default: 700              }, // Hauteur du graphe
        cssClasses:         { type: String,         default: ''               }, // Classes css utilisées
        styles:             { type: Object,         default: () => {}         }, // Styles utilisés
        plugins:            { type: Object,         default: () => {}         }  // plugins utilisés
    })

    // Données injectées dans le graphique
    let chartData = reactive({
        // Etiquettes l'axe 
        labels: [],
        // Valeurs des données du graphique
        // 3 datasets, en un premier temps les données sont statiques (jeux de test)
        // Elles seront écrasées par les données réelles provenant de l'API
        datasets: [
            {
                // Etiquette du jeu de données à projeter
                label : 'Consommation Totale',
                // Valeurs des données (statiques pour l'exemple)
                data: [],
                backgroundColor:[
                'rgba(0, 255, 0, 0.4)',
                'rgba(0, 0, 255, 0.4)',
                'rgba(255, 255, 0, 0.4)',
                'rgba(255, 0, 0, 0.4)',
                'rgba(0, 255, 255, 0.4)'],
                borderColor: [
                'rgba(0, 255, 0, 0.7)',
                'rgba(0, 0, 255, 0.7)',
                'rgba(255, 255, 0, 0.7)',
                'rgba(255, 0, 0, 0.7)',
                'rgba(0, 255, 255, 0.7)'],
                tension: 0.5,
                fill:true
            },
        ]
    });

    // Options du graphique
    // Les principales utilisées, ils en existe beaucoup d'autres
    // voir documentation
    let chartOptions = reactive({ 
        // Aspect responsive du graphique
        responsive: true,  
         // Les plugins
         plugins:{
            // Titre du graphique      
            title:{
                // Affichage
                display:true,
                // Libellé du graphique
                text : '',
                // Police du texte
                font:{
                    size:16
                }
            }
        } 

    });


    // Montage du composant Chargement des données
    // Liste contiendra le résultat de la requête
    let liste = ref()
    onMounted(async() => {

        let request = "https://opendata.agenceore.fr/api/records/1.0/search/"
        +"?dataset=conso-elec-gaz-annuelle-par-secteur-dactivite-agregee-region"
        +"&q=&rows=12"
        +"&refine.annee=2021"
        +"&refine.operateur=GRDF"

        await fetch(request)
        // Réponse demandée en json
        .then(response => response.json())
        // récupération de la réponse
        .then(response => {
            liste.value = new Array(response);
            // On vérifie dans la consle l'obtention des résultats
            console.log("response", liste.value);
            // Récupération du nombres de valeurs retournées
            chartOptions.plugins.title.text += liste.value[0].nhits+" réponses"
            // Chargement des labels (axe des ordonnées)
            // Création d'un set pour valeurs uniques
            let setLabels = new Set()
            // Parcours des valeurs , récupération des années
            liste.value[0].records.forEach( (el)=>{
                setLabels.add(el.fields.libelle_region)
            })
            // Transmission des valeurs du set aux labels 
            chartData.labels = Array.from(setLabels)
            // Tri des labels par ordre croissant
            chartData.labels.sort()

            // Calcul des valeurs par labels
            let cptA = []
            // Parcours des labels
            chartData.labels.forEach( (label)=>{
                // Parcours des données
                // Compteurs pour un labels
                let nbA = 0
                // Parcours des valeurs
                liste.value[0].records.forEach( (el)=>{
                    // Si c'est le bon label
                    if(label == el.fields.libelle_region){
                        // Comptage des valeurs
                        nbA += el.fields.consototale
                    }
                })
                // Mise à jour des tableaux
                cptA.push(nbA)
            })
            // chargement des données
            chartData.datasets[0].data = cptA
        })
        .catch(error => console.log('erreur Ajax', error))
    })
</script>

<template>
    <div class="container mt-16 w-[70vw]">
        <Bar
            :chart-options="chartOptions" 
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
        />
    </div>

</template>