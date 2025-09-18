import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import ArticlePage from "../view/ArticlePage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/article/:id',
        name: 'ArticlePage',
        component: ArticlePage,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
