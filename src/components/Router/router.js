import { createRouter, createWebHistory } from 'vue-router'
import Sign_in from "@/components/security/sign_in.vue";
import Sign_up from "@/components/security/sign_up.vue";
import Home from "@/components/MainView/home.vue";
const routes = [
    {
        path: '/',
        redirect: "/sign_in"
    },
    {
        path: '/sign_in',
        component: Sign_in
    },
    {
        path: '/sign_up',
        component: Sign_up
    },
    {
        path: '/home',
        component: Home
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router