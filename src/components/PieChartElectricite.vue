<script setup>
    // Import des éléments utiles de vue
    import { reactive, ref, onMounted } from 'vue';

    // Import d'un graphique type doughnut
    import { Doughnut } from 'vue-chartjs'

    // Import des objets du graphique de la bibliothèque ChartJs
    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

    // Eléments utilisés potentiellement pour notre graphique
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)


    // Propriétés du graphique Utilisés dans le template (props)
    // On définit pour chacune son type de données et sa valeur par défaut
    // On peut utiliser une grande variété de types, voire des objets
    const propChart = defineProps({
        chartId:            { type: String,         default: 'doughnut-chart' }, // Id du graphique
        datasetIdKey:       { type: String,         default: 'label'          }, // id du dataSet
        width:              { type: Number,         default: 500              }, // Largeur du graphe
        height:             { type: Number,         default: 500              }, // Hauteur du graphe
        cssClasses:         { type: String,         default: ''               }, // Classes css utilisées
        styles:             { type: Object,         default: () => {}         }, // Styles utilisés
        plugins:            { type: Object,         default: () => {}         }  // plugins utilisés
    })

    // Données du graphe
    // Pour l'instant juste pour tester le fonctionnement
    const chartData = reactive({
        // Les éléments sont au départ à vide
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [],
                borderColor:[],
                borderWidth:1
            }
        ]
    })

    // Options du graphe
    const chartOptions = reactive({
        responsive: true,
        maintainAspectRatio: false
    })

    // Utilisation d'une ref pour requête Ajax
    // null au départ (important)
    let liste = ref(null);
    // Au montage du composant
    onMounted(async() => {
        await fetch('https://opendata.agenceore.fr/api/records/1.0/search/?dataset=conso-elec-gaz-annuelle-par-secteur-dactivite-agregee-region&q=&rows=150&facet=operateur&facet=annee&facet=filiere&facet=libelle_region&refine.filiere=Electricit%C3%A9&refine.operateur=Enedis')
        // Réponse demandée en json
        .then(response => response.json())
        // récupération de la réponse
        .then(response => {
            liste = response;
            // On vérifie dans la consle l'obtention des résultats
            console.log("response", liste);

            // Parcours de la liste des villageois
            // pour placer les spécialités dans un set
            // Permet d'éliminer les doublons
            let setSp = new Set();
            liste.records.forEach( (el) => {               
                setSp.add(el.fields.libelle_region)
            })            
            console.log("setSp : ", setSp);    
            // Récupération des valeurs du set dans un tableau            
            chartData.labels=Array.from(setSp);
            // Tri du tableau par ordre aplhabétique
            chartData.labels.sort();
            console.log("labels : ", chartData.labels);    

            // calcul du nombre de villageois par spécialité
            let cpt = [];
            // Parcours des spécialités
            chartData.labels.forEach(function(reg){
                // Initialisation du nombre pour le spécialité en cours
                let nb = 0
                // Parcours de la liste des villageois
                liste.records.forEach( (el) => {        
                    // Si c'est la bonne spécialité
                    // on compte +1
                    if(reg == el.fields.libelle_region){
                        nb++
                    }
                })
                // on place le nb de villageois de cette spécialité
                // dans le tableau de comptage
                cpt.push(nb);                            
            })
            // On transfert le tableau de comptage dans les data 
            chartData.datasets[0].data = cpt;

            // Calcul des couleurs et bordures
            let bgColor = [];
            let bdColor = [];
            // Pour chaque valeur existante            
            cpt.forEach( function(val){
                // On calcul la couleur du secteur
                let c1 = couleur(0,255)
                let c2 = couleur(0,255)
                let c3 = couleur(0,255)
                let tr = 0.5                
                // Couleur avec transparence
                let color = 'rgba(' + [c1, c2,c3,tr].join(',') +")"
                bgColor.push(color)
                // Bordure sans transparence
                let border = 'rgba(' + [c1, c2,c3].join(',') +")"
                bdColor.push(color)
            })
            // Chargement des couleurs et des bordures
            chartData.datasets[0].backgroundColor = bgColor;
            chartData.datasets[0].borderColor = bdColor;

        })
        .catch(error => console.log('erreur Ajax'))
    })

    // Fonction de calcul aléatoire des couleurs
    const couleur = (min, max) => {        
        return Math.floor(Math.random() * (max - min));
    }
</script>

<template>
    <div class="container w-[70vw]">
        <Doughnut
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

    