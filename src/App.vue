<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/menu.vue'
</script>

<template>
  <div :class="isDark ? 'dark' : ''"> <!--si booléan isDark = true, activer le mode dark sinon laisser vide (light mode)-->
    <body class="bg-[#eee] dark:bg-[#333] duration-700">
      <div class="absolute gap-3 flex top-[30px] left-[30px] items-center">
        <p class="relative text-lg dark:text-white">Dark Mode</p>
        <label class="switch relative dark:border-transparent dark:hover:border-white border-2 rounded-full ">
          <input type="checkbox" checked @click="isDark=!isDark">
          <span class="slider round bg-white before:bg-[#222] dark:before:bg-white"></span>
        </label>
      </div>
      <RouterLink to="/" class="button1 rounded-xl fixed top-[20px] left-0 right-0 m-auto bg-white dark:bg-[#222] p-5 w-[70px] border-2 border-white hover:border-black dark:border-transparent dark:hover:border-white duration-700">
        <span class="icon flex justify-center items-center"><i class="fa-solid fa-house dark:text-white"></i></span>
      </RouterLink>
      <button class="button1 z-10 rounded-xl fixed top-[30px] right-[30px] bg-white dark:bg-[#222] p-5 w-[70px] border-2 border-white hover:border-black dark:border-transparent dark:hover:border-white duration-700" @click="menu = !menu">
        <span class="icon"><i class="fa-solid fa-bars fa-2xl dark:text-white"></i></span>
      </button>
      <button class="button2 z-10 fixed bottom-0 w-[70px] bg-white dark:bg-[#222] p-3 rounded-t-xl" @click="menu = !menu" v-if="!menu">
        <span class="icon"><i class="fa-solid fa-caret-up fa-2xl dark:text-white"></i></span>
      </button>
        <button class="button3 z-10 fixed bottom-16 w-[70px] bg-white dark:bg-[#222] p-3 rounded-t-xl" @click="menu = !menu" v-if="menu">
          <span class="icon"><i class="fa-solid fa-caret-down fa-2xl dark:text-white"></i></span>
        </button>
      <Transition>
        <Menu id="menu" v-if="menu"></Menu>
      </Transition>
      <RouterView />
    </body>
  </div>
</template>

<style>

.switch {
  width: 60px;
  height: 34px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  
}

.slider:before {
  position: absolute;
  content: "";
  height: 23px;
  width: 23px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #222;
}

input:focus + .slider {
  box-shadow: 0 0 1px #222;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.button1{
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 480px) {
    .button1{
      opacity: 0;
      visibility: hidden;
    }
}

@media (min-width: 480px) {
    .button2{
      opacity: 0;
      visibility: hidden;
    }
}

@media (min-width: 480px) {
    .button3{
      opacity: 0;
      visibility: hidden;
    }
}

.button3{
  transition-delay: 300ms;
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: 0.6s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: 150px;
}

@media (max-width:480px) {
  .v-enter-from,
  .v-leave-to {
  opacity: 0;
  translate: 0px 150px;
}
}
</style>

<script>
export default {
  data() {
    return {
      isDark:true,
      menu : true
    }
  },
  components:{

  }
}

</script>