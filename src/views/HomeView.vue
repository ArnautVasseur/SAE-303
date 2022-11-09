<script setup>

</script>

<template>
    <div>
        <div class="container relative flex justify-center items-center flex-wrap px-16 gap-5 mt-32 lg:mt-0">

            <div
                class="box border-4 border-[#eb5a5a] relative w-[300px] h-[350px] dark:bg-[#222] bg-[#fff] flex justify-center items-center rounded-3xl duration-300 ease-in-out hover:border-black">
                <div
                    class="content relative flex justify-center items-center flex-col text-center gap-5 py-5 w-full h-full overflow-hidden rounded-[20px]">
                    <div
                        class="icon2 text-[#eb5a5a] hover:text-black w-20 h-20 flex justify-center items-center text-4xl bg-[#222] duration-300 ease-in-out shadow-simple_red hover:bg-[#eb5a5a] rounded-3xl">
                        <RouterLink to="/graphiques"><i class="fa-solid fa-chart-simple"></i></RouterLink>
                    </div>
                    <div class="texts">
                        <h3 class="text-xl font-medium my-3 dark:text-white">Graphiques</h3>
                        <p class="text-base dark:text-white">Lorem Ipsum</p>
                    </div>
                    <RouterLink to="/graphiques"
                        class="button bg-[#eb5a5a] w-44 h-10 rounded-xl flex justify-center items-center shadow-lg font-medium">
                        En savoir plus
                    </RouterLink>
                </div>
            </div>

            <div
                class="box border-4 border-[#89ec5b] relative w-[300px] h-[350px] dark:bg-[#222] bg-[#fff] flex justify-center items-center rounded-3xl duration-300 ease-in-out hover:border-black">
                <div
                    class="content relative flex justify-center items-center flex-col text-center gap-5 py-5 w-full h-full overflow-hidden rounded-[20px]">
                    <div
                        class="icon1 text-[#89ec5b] hover:text-black w-20 h-20 flex justify-center items-center text-4xl bg-[#222] duration-300 ease-in-out shadow-simple_green hover:bg-[#89ec5b] rounded-3xl">
                        <RouterLink to="/mapE"><i class="fa-solid fa-map"></i></RouterLink>
                    </div>
                    <div class="texts">
                        <h3 class="text-xl font-medium my-3 dark:text-white">Map Éolienne</h3>
                        <p class="text-base dark:text-white">Lorem Ipsum</p>
                    </div>
                    <RouterLink to="/mapE"
                        class="button bg-[#89ec5b] w-44 h-10 rounded-xl flex justify-center items-center shadow-lg font-medium">
                        En savoir plus
                    </RouterLink>
                </div>
            </div>

            <div
                class="box border-4 border-[#5b89eb] relative w-[300px] h-[350px] dark:bg-[#222] bg-[#fff] flex justify-center items-center rounded-3xl duration-300 ease-in-out hover:border-black">
                <div
                    class="content relative flex justify-center items-center flex-col text-center gap-5 py-5 w-full h-full overflow-hidden rounded-[20px]">
                    <div
                        class="icon3 text-[#5b89eb] hover:text-black w-20 h-20 flex justify-center items-center text-4xl bg-[#222] duration-300 ease-in-out shadow-simple_blue hover:bg-[#5b89eb] rounded-3xl">
                        <RouterLink to="/mapH"><i class="fa-solid fa-map"></i></RouterLink>
                    </div>
                    <div class="texts">
                        <h3 class="text-xl font-medium my-3 dark:text-white">Map Hydrolique</h3>
                        <p class="text-base dark:text-white">Lorem Ipsum</p>
                    </div>
                    <RouterLink to="/mapH"
                        class="button bg-[#5b89eb] w-44 h-10 rounded-xl flex justify-center items-center shadow-lg font-medium">
                        En savoir plus
                    </RouterLink>
                </div>
            </div>

            <div
                class="box border-4 border-[#DF40F9] relative w-[300px] h-[350px] dark:bg-[#222] bg-[#fff] flex justify-center items-center rounded-3xl duration-300 ease-in-out hover:border-black">
                <div
                    class="content relative flex justify-center items-center flex-col text-center gap-5 py-5 w-full h-full overflow-hidden rounded-[20px]">
                    <div
                        class="icon4 text-[#DF40F9] hover:text-black w-20 h-20 flex justify-center items-center text-4xl bg-[#222] duration-300 ease-in-out shadow-simple_pink hover:bg-[#DF40F9] rounded-3xl">
                        <RouterLink to="/table"><i class="fa-solid fa-table"></i></RouterLink>
                    </div>
                    <div class="texts">
                        <h3 class="text-xl font-medium my-3 dark:text-white">Table de données</h3>
                        <p class="text-base dark:text-white">Lorem Ipsum</p>
                    </div>
                    <RouterLink to="/table"
                        class="button bg-[#DF40F9] w-44 h-10 rounded-xl flex justify-center items-center shadow-lg font-medium">
                        En savoir plus
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.container .box:hover .content .texts h3,
.container .box:hover .content .texts p {
    color: black;
}

.container .box:hover .content .button {
    background-color: #222;
    color: white;
}

.container .box:hover .content .icon1 {
    box-shadow: 0 0 0 4px #222, 0 0 0 300px #89ec5b;
}

.container .box:hover .content .icon2 {
    box-shadow: 0 0 0 4px #222, 0 0 0 300px #eb5a5a;
}

.container .box:hover .content .icon3 {
    box-shadow: 0 0 0 4px #222, 0 0 0 300px #5b89eb;
}

.container .box:hover .content .icon4 {
    box-shadow: 0 0 0 4px #222, 0 0 0 300px #DF40F9;
}
</style>