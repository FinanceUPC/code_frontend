import {createRouter, createWebHistory} from "vue-router";
import sign_in from "@/views/security/sign_in.vue";
import sign_up from "@/views/security/sign_up.vue";
import home from "@/views/home.vue";
import conversion_rate from "@/views/Conversion_rate.vue";

const routes = [
    {
        path: "/",
        redirect: "sign-in"
    },
    {
        path: "/sign-in",
        name: "sign-in",
        component: sign_in
    },
    {
        path: "/sign-up",
        name: "sign-up",
        component: sign_up
    },
    {
        path: "/home",
        name: "home",
        component: home
    },{
        path: "/conversionRate",
        name: "conversionRate",
        component: conversion_rate
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;