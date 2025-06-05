import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: Signup
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/:catchAll(.*)', // Rota para lidar com caminhos não encontrados
            redirect: '/' // Redireciona para a home
        }
    ]
})

export default router
