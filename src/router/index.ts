import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create-survey',
      name: 'Create Survey',
      component: () => import('../views/CreateSurveyView.vue'),
    },
    {
      path: '/view-stats',
      name: 'View Stats',
      component: () => import('../views/ViewGraphsView.vue'),
      children: [
        {
          path: 'agree-survey',
          name: 'Agree or Else Survey',
          component: () => import('../views/graphs/AgreeView.vue'),
        },
        {
          path: 'best-survey',
          name: 'Best of Five Survey',
          component: () => import('../views/graphs/BestView.vue'),
        },
        {
          path: 'open-survey',
          name: 'Open Ended Survey',
          component: () => import('../views/graphs/OpenView.vue'),
        },
      ],
    },
  ],
})

export default router
