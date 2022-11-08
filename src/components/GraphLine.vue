<script setup>
    import { reactive, ref, onMounted } from 'vue';

    // Import d'un graphique typeLineChart
    import { Line } from 'vue-chartjs'

    import { Chart as ChartJS, Title, Tooltip, Legend,  PointElement, LineElement, 
            LineController, CategoryScale, LinearScale, Filler } from 'chart.js'

    // Eléments utilisés par notre graphique registration pour Vue-chart
    ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, 
        LineController, CategoryScale, LinearScale, Filler )


    // Propriétés du graphique Utilisés dans le template (props)
    // On définit pour chacune son type de données et sa valeur par défaut
    // On peut utiliser une grande variété de types, voire des objets
    const propChart = defineProps({
        chartId:            { type: String,         default: 'line-chart'      }, // Id du graphique
        datasetIdKey:       { type: String,         default: 'label'          }, // id du dataSet
        width:              { type: Number,         default: 200              }, // Hauteur du graphe
        height:             { type: Number,         default: 100             }, // Largeur du graphe
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
                label : 'Consommation Agriculture',
                // Valeurs des données (statiques pour l'exemple)
                data: [],
                borderColor: 'rgba(255, 0, 0, 0.5)',
                tension: 0.5,      
                fill:true
            },
            {
                // Etiquette du jeu de données à projeter
                label : 'Consommation Industrielle',
                // Valeurs des données (statiques pour l'exemple)
                data: [],
                borderColor: 'rgba(255, 127.5, 0, 0.5)',
                tension: 0.5,      
                fill:true
            },
            {
                // Etiquette du jeu de données à projeter
                label : 'Consommation Tertiaire',
                // Valeurs des données (statiques pour l'exemple)
                data: [],
                borderColor: 'rgba(255, 255, 0, 0.5)',
                tension: 0.5,      
                fill:true
            },
            {
                // Etiquette du jeu de données à projeter
                label : 'Consommation Résidentielle',
                // Valeurs des données (statiques pour l'exemple)
                data: [],
                borderColor: 'rgba(0, 255, 0, 0.5)',
                tension: 0.5,      
                fill:true
            },
            {
                // Etiquette du jeu de données à projeter
                label : 'Consommation Inconnue',
                // Valeurs des données (statiques pour l'exemple)
                data: [],
                borderColor: 'rgba(255, 255, 255, 0.5)',
                tension: 0.5,      
                fill:true
            },
            {
                // Etiquette du jeu de données à projeter
                label : 'Consommation Totale',
                // Valeurs des données (statiques pour l'exemple)
                data: [],
                borderColor: 'rgba(0, 0, 255, 0.5)',
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
        +"&q=&lang=FR"
        +"&rows=300"
        +"&sort=-annee"
        +"&refine.filiere=Electricit%C3%A9"
        +"&refine.libelle_region=Grand+Est"

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
                setLabels.add(el.fields.annee)
            })
            // Transmission des valeurs du set aux labels 
            chartData.labels = Array.from(setLabels)
            // Tri des labels par ordre croissant
            chartData.labels.sort()

            // Calcul des valeurs par labels
            let cptA = []
            let cptI = []
            let cptT = []
            let cptR = []
            let cptNA = []
            let cptall = []
            // Parcours des labels
            chartData.labels.forEach( (label)=>{
                // Parcours des données
                // Compteurs pour un labels
                let nbA = 0
                let nbI = 0
                let nbT = 0
                let nbR = 0
                let nbNA = 0
                let nball = 0
                // Parcours des valeurs
                liste.value[0].records.forEach( (el)=>{
                    // Si c'est le bon label
                    if(label == el.fields.annee){
                        // Comptage des valeurs
                        nbA += el.fields.consoa
                        nbI += el.fields.consoi
                        nbT += el.fields.consot
                        nbR += el.fields.consor
                        nbNA += el.fields.consona
                        nball += el.fields.consoa + el.fields.consoi + el.fields.consot + el.fields.consor + el.fields.consona
                    }
                })
                // Mise à jour des tableaux
                cptA.push(nbA)
                cptI.push(nbI)
                cptT.push(nbT)
                cptR.push(nbR)
                cptNA.push(nbNA)
                cptall.push(nball)
            })
            // chargement des données
            chartData.datasets[0].data = cptA
            chartData.datasets[1].data = cptI
            chartData.datasets[2].data = cptT
            chartData.datasets[3].data = cptR
            chartData.datasets[4].data = cptNA
            chartData.datasets[5].data = cptall
        })
        .catch(error => console.log('erreur Ajax', error))
    })
</script>

<template>
    <Line
        :chart-options="chartOptions" 
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    class=""/>
</template>