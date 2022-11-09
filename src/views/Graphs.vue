<script setup lang="ts">
import GraphLine from '../components/GraphLine.vue'
import BarChart from '../components/BarChart.vue'
import PieChartElec from '../components/PieChartElectricite.vue'
import PieChartGaz from '../components/PieChartGaz.vue'
import PolarArea from '../components/PolarArea.vue'
</script>

<template>
    <div class="flex flex-col lg:p-20 pl-[60px] pt-[60px] pb-[60px] pr-[30px] mt-16">
        <h1 class="text-4xl text-center dark:text-white mb-16">Graphiques et explications</h1>
        <h2 class="text-xl dark:text-white mb-10">Consommation annuelle par région d'électricité</h2>
        <div class="flex lg:flex-row flex-col gap-5 items-center mb-16">
            <p class="dark:text-white lg:w-1/2">Nous pouvons observer dans le graphique ci-contre la représentation
                annuelle de la consommation
                en tout type d'électricité par région. Elle nous montre la répartition de chacune des type de
                consommation et contrairement
                à ce que l'on pourrait penser, la consommation en électricité est en fait minoritaire pour ce qui
                concerne les travaux agricoles
                ( consommation Agricole ).<br /><br /> La majorité de la consommation totale provient donc des foyer et
                des entreprises.<br /><br />
                Ce graphique pourrait donc être utile en tant qu'argument et preuve que, en tant qu'individu ou
                entreprise étant la majorité en
                terme de consommation, nous pouvons faire des efforts pour réduire notre consommation d'énergie et
                contribuer à la réduction de
                la pollution par exemple.<br /><br />
                Le graphique en ligne est selon moi, un très bon graphique pour représenter l'évolution au cours du
                temps plusieurs données
                comme la consommation annuelle par type de la france en MW. Un bon graphique qui aurait pu servir
                l'alternative aurait pu être
                le graphique radar, permettant une visualisation de plusieurs données selon par exemple le mois ou
                l'année sélectionnée.
            </p>
            <GraphLine class="lg:w-1/2 h-full w-full" />
        </div>
        <hr class="my-10" />

        <h2 class="text-xl dark:text-white">Consommation totale par région d'électricité</h2>
        <div class="flex lg:flex-row flex-col gap-5 items-center mb-16">
            <BarChart class="lg:w-1/2 h-full w-full" />
            <p class="dark:text-white lg:w-1/2">Pour ce graphique ci-contre, nous avons la représentation visuelle et
                proportionnelle de la
                consommation totale d'électricité par région. Ce graphe peut facilement nous tromper car il ne
                représente par la fait que par
                exemple les habitants de l'Île-de-France consomment plus, c'est tout simplement parce que ils sont plus
                nombreux.<br /><br />
                Ce graphique peut
                servir d'exemple pour représenter l'impact sur l'environnement de l'utilisation de l'énergie dû au
                nombre d'habitant de cette
                région.
                Cela peut être aussi dû au fait que les habitants de l'Île-de-France ou du Haut-de-France consomment
                plus, mais cela n'impacterai
                que très
                peu le graphique.
                J'ai décidé de représenter ces données grâce à un graphique en barre car je pense que ce type de graphe
                est le meilleur
                pour représenter une comparaison entre plusieurs catégories comme la consommation de chaque région.
            </p>
        </div>
        <hr class="my-10" />

        <h2 class="text-xl dark:text-white mb-10">Nombre d'opérateurs de Gaz et d'électricité déployé chaque année</h2>
        <div class="flex lg:flex-row flex-col gap-5 items-center mb-16">
            <p class="dark:text-white lg:w-1/2">Comme nous pouvons le voir sur ce graphe en PolarArea, la création de
                nouveaux opérateurs augmente chaque année que cela soit pour le gaz ou l'électricité. Cela peut servir
                comme argument
                pour la création de nouveaux emplois ou contre la pollution et la consommation d'énergie en train
                d'augmenter exponentiellement.
                <br><br>
                Comme expliqué précédemment, ce type de graphique en PolarArea représente bien les évolutions au cours
                du temps et
                la comparaison entre plusieurs données d'une même catégorie.
            </p>
            <PolarArea class="lg:w-1/2 h-full w-full" />
        </div>
        <hr class="my-10" />
        <div class="flex lg:flex-row flex-col gap-5 items-center mb-16">
            <PieChartElec class="lg:w-1/2 h-full w-full" />
            <p class="dark:text-white lg:w-1/2">Pour ce graphique ci-contre, nous avons la représentation visuelle et
                proportionnelle des installations de l'opérateur leader en électricité: Enebis.
                Comme montré, Enebis s'est très bien réparti et touche absolument toutes les régions de façon
                équivalente.
                Il y a 4 installations où la région n'est pas spécifiée cependant.
                <br><br>
                L'utilisation d'un graphique Doughnut permet une lecture rapide mais pas forcément précise du premier
                coup
                la répartition de valeur entre une même catégorie. C'est pour cela que j'ai choisi d'utiliser ce genre
                de
                graphique pour ces données là.
            </p>
        </div>
        <hr class="my-10" />
        <div class="flex lg:flex-row flex-col gap-5 items-center mb-16">
            <p class="dark:text-white lg:w-1/2">Pour ce graphique ci-contre, nous avons la représentation visuelle et
                proportionnelle des installations de l'opérateur leader du Gaz: GRDF.
                Comme montré, GRDF s'est très bien réparti et touche absolument toutes les régions de façon équivalente.
                <br><br>
                L'utilisation d'un graphique Doughnut permet une lecture rapide mais pas forcément précise du premier
                coup
                la répartition de valeur entre une même catégorie. C'est pour cela que j'ai choisi d'utiliser ce genre
                de
                graphique pour ces données là.
            </p>
            <PieChartGaz class="lg:w-1/2 h-full w-full" />
        </div>
        <hr class="my-10" />
        <h2 class="text-4xl text-center dark:text-white mb-16">Conclusion</h2>
        <p class="dark:text-white text-center lg:mx-40">Le but de ces graphiques et des graphiques en général est de
            comprendre
            rapidement et clairement les
            différentes données
            les énergies malgré la complexité de celle-ci.
            Elles représentes notamment les consommations des régions, des différents opérateurs, le nombre d'opérateurs
            et toutes ces données
            et graphiques pourront notamment servir comme représentation visuelle de données dans un article ou débat ou
            même
            lors d'un cours magistral.
        </p>
    </div>
</template>

<style scoped>

</style>