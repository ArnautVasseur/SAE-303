<script setup lang="ts">
import GraphLine from '../components/GraphLine.vue'
import BarChart from '../components/BarChart.vue'
import PieChartElec from '../components/PieChartElectricite.vue'
import PieChartGaz from '../components/PieChartGaz.vue'
import PolarArea from '../components/PolarArea.vue'
</script>

<template>
    <div class="flex flex-col lg:p-20 pl-[60px] pt-[60px] pb-[60px] mt-16">
        <h1 class="text-4xl text-center dark:text-white mb-16">Graphiques et explications</h1>
        <h2 class="text-xl dark:text-white mb-10">Consommation annuelle par région d'électricité</h2>
        <div class="flex lg:flex-row flex-col gap-5 items-center mb-16">
            <p class="dark:text-white lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus metus a risus lacinia accumsan.
                Etiam et auctor libero, sollicitudin aliquam nunc. Morbi eget tempor magna, in fringilla ante. Donec
                vulputate ante eget risus volutpat, ac molestie purus commodo. Vivamus imperdiet, magna in posuere
                blandit,
                lectus leo accumsan nibh, at feugiat est quam eget ante. Donec eget urna suscipit, ultricies libero sed,
                cursus lectus. Fusce et ex vitae ex suscipit malesuada. Pellentesque ultricies non purus vitae varius.
                Phasellus sed leo orci. Sed massa turpis, dignissim ut fringilla ut, fringilla eu lorem. Phasellus
                ullamcorper ante arcu. Vivamus maximus placerat dignissim. Vestibulum justo augue, maximus eu sem in,
                lacinia accumsan ligula. Nulla facilisi. Nulla facilisi.</p>
            <GraphLine class="lg:w-1/2 h-full w-full"/>
        </div>
        <hr class="my-10"/>

        <h2 class="text-xl dark:text-white">Consommation totale par région d'électricité</h2>
        <div class="flex lg:flex-row flex-col gap-5 items-center mb-16">
            <BarChart class="lg:w-1/2 h-full w-full"/>
            <p class="dark:text-white lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus metus a risus lacinia accumsan.
                Etiam et auctor libero, sollicitudin aliquam nunc. Morbi eget tempor magna, in fringilla ante. Donec
                vulputate ante eget risus volutpat, ac molestie purus commodo. Vivamus imperdiet, magna in posuere
                blandit,
                lectus leo accumsan nibh, at feugiat est quam eget ante. Donec eget urna suscipit, ultricies libero sed,
                cursus lectus. Fusce et ex vitae ex suscipit malesuada. Pellentesque ultricies non purus vitae varius.
                Phasellus sed leo orci. Sed massa turpis, dignissim ut fringilla ut, fringilla eu lorem. Phasellus
                ullamcorper ante arcu. Vivamus maximus placerat dignissim. Vestibulum justo augue, maximus eu sem in,
                lacinia accumsan ligula. Nulla facilisi. Nulla facilisi.</p>
        </div>
        <hr class="my-10"/>

        <h2 class="text-xl dark:text-white mb-10">Consommation annuelle par région d'électricité</h2>
        <div class="flex lg:flex-row flex-col gap-5 items-center mb-16">
            <p class="dark:text-white lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus metus a risus lacinia accumsan.
                Etiam et auctor libero, sollicitudin aliquam nunc. Morbi eget tempor magna, in fringilla ante. Donec
                vulputate ante eget risus volutpat, ac molestie purus commodo. Vivamus imperdiet, magna in posuere
                blandit,
                lectus leo accumsan nibh, at feugiat est quam eget ante. Donec eget urna suscipit, ultricies libero sed,
                cursus lectus. Fusce et ex vitae ex suscipit malesuada. Pellentesque ultricies non purus vitae varius.
                Phasellus sed leo orci. Sed massa turpis, dignissim ut fringilla ut, fringilla eu lorem. Phasellus
                ullamcorper ante arcu. Vivamus maximus placerat dignissim. Vestibulum justo augue, maximus eu sem in,
                lacinia accumsan ligula. Nulla facilisi. Nulla facilisi.</p>
            <PolarArea class="lg:w-1/2 h-full w-full"/>
        </div>
        <hr class="my-10"/>
    </div>
</template>

<style scoped>

</style>