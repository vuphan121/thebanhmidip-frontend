import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'
//import RegisterPage from '@/view/RegisterPage.txt'
import ArticlePage from '@/view/ArticlePage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/article/issue/:id', name: 'Article', component: ArticlePage },
    {path: '/subscribed', component: () => import('@/view/Subscribed.vue')
    }
]

export default createRouter({ history: createWebHistory(), routes })
