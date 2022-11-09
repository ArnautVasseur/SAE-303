import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraphView from '../views/Graphs.vue'
import Map1View from '../views/MapEolienne.vue'
import Map2View from '../views/MapHydrolique.vue'
import TableView from '../views/GraphWithData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   path: '/',   name: 'home',   component: HomeView   },
    {   path: '/graphiques',   name: 'graphiques',   component: GraphView   },
    {   path: '/mapE',   name: 'map1',   component: Map1View   },
    {   path: '/mapH',   name: 'map2',   component: Map2View   },
    {   path: '/table',   name: 'table',   component: TableView   },
  ]
})

export default router