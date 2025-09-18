import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'
//import RegisterPage from '@/view/RegisterPage.txt'
import ArticlePage from '@/view/ArticlePage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    // { path: '/register', name: 'Register', component: RegisterPage },
    { path: '/article/issue/:id', name: 'Article', component: ArticlePage }
]

export default createRouter({ history: createWebHistory(), routes })
