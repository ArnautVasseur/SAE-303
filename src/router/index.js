import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraphView from '../views/Graphs.vue'
import MapView from '../views/Maps.vue'
import TableView from '../views/GraphWithData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   path: '/',   name: 'home',   component: HomeView   },
    {   path: '/graphiques',   name: 'graphiques',   component: GraphView   },
    {   path: '/map',   name: 'map',   component: MapView   },
    {   path: '/table',   name: 'table',   component: TableView   },
  ]
})

export default router