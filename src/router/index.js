import {createRouter, createWebHistory} from "vue-router";
import sign_in from "@/views/security/sign_in";
import sign_up from "@/views/security/sign_up";
import home from "@/views/home";
import conversion_rate from "@/views/Conversion_rate";

const router = createRouter({
    history: createWebHistory(),
    routes: [
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
})
export default router;