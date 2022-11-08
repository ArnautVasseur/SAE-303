<template>
    <div class="nav dark:bg-[#222] duration-700">
      <ul>
        <li class="list">
          <RouterLink to="/">
            <span class="icon"><i class="fa-solid fa-house dark:text-white"></i></span>
            <span class="title border-black dark:border-white border-2 dark:text-white dark:bg-[#222] bg-[#eee]">Page Principale</span>
            <span class="box w-16 h-16 -mt-1 border-2 border-transparent hover:border-white absolute rounded-t-full"></span>
          </RouterLink>
        </li>
        <li class="list">
          <RouterLink to="/map">
            <span class="icon"><i class="fa-solid fa-map dark:text-white hover:text-black"></i></span>
            <span class="title border-black dark:border-[#89ec5b] border-2 dark:text-white dark:bg-[#222] bg-[#eee]">Carte des Installations Éoliennes</span>
            <span class="box w-16 h-16 -mt-1 border-2 border-transparent hover:border-[#89ec5b] absolute rounded-full"></span>
          </RouterLink>
        </li>
        <li class="list">
          <RouterLink to="/graphiques">
            <span class="icon"><i class="fa-solid fa-chart-simple dark:text-white"></i></span>
            <span class="title border-black dark:border-[#eb5a5a] border-2 dark:text-white dark:bg-[#222] bg-[#eee]">Graphiques</span>
            <span class="box w-16 h-16 -mt-1 border-2 border-transparent hover:border-[#eb5a5a] absolute rounded-full"></span>
          </RouterLink>
        </li>
        <li class="list">
          <RouterLink to="/table">
            <span class="icon"><i class="fa-solid fa-table dark:text-white"></i></span>
            <span class="title border-black dark:border-[#5b89eb] border-2 dark:text-white dark:bg-[#222] bg-[#eee]">Détail Consommation par Région</span>
            <span class="box w-16 h-16 -mt-1 border-2 border-transparent hover:border-[#5b89eb] absolute rounded-b-full"></span>
          </RouterLink>
        </li>
      </ul>
    </div>
</template>

<style>
.nav{
    position: fixed;
    top: 200px;
    right: 30px;
    width: 70px;
    height: 280px;
    background-color: white;
    border-radius: 35px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    z-index: 5;
}

@media (max-width: 480px) {
    .nav{
        position: fixed;
        left: 0;
        top: 92%;
        height: 70px;
        flex-direction: row;
        width: 100%;
        border-radius: 0;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        z-index: 5;
    }
}

.nav ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    
}

@media (max-width: 480px) {
    .nav ul{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
}

.nav ul li{
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.nav ul li a{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    color: #333;
    font-weight: 500;
}

.nav ul li a .icon{
    position: relative;
    display: block;
    line-height: 75px;
    text-align: center;
}

.nav ul li a .icon i{
    font-size: 24px;
}

.nav ul li a .title{
    position: absolute;
    top: 50%;
    right: 70px;
    transform: translateY(-50%);
    padding: 5px 10px;
    border-radius: 6px;
    transition: 0.5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
}

@media (max-width: 480px) {
    .nav ul{
      display: flex;
      flex-direction: row;
    }
}

.nav ul li a .box:hover{
  transition-duration: 500ms;
  border-width: 2px;
}

@media (max-width: 480px) {
    .nav ul li a .box{
      border-radius: 100%;
      transition-duration: 0ms;
    }
}

.nav ul li:hover a .title{
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(-25px);
}

@media (max-width: 480px) {
    .nav ul li:hover a .title{
      opacity: 0;
      visibility: hidden;
    }
}
</style>