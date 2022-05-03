import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import LanguajesView from '../views/LanguajesView.vue'
import TrendsView from '../views/TrendsView.vue'
import AboutMeView from '../views/AboutMeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/languajesView',
    name: 'languajesView',
    component: LanguajesView
  },
  {
    path: '/projectsView',
    name: 'projectsView',
    component: ProjectsView
  },
  {
    path: '/trendsView',
    name: 'trendsView',
    component: TrendsView
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: AboutMeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router