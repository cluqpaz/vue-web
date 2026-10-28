import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/Domus/Domus.vue";
import Batman from "../paginae/Batman/Batman.vue";
import Primus from "../paginae/Simpsons/Primus.vue";
import Responsum from "../paginae/Responsum/Responsum.vue";
import Layout from "@/paginae/Simpsons/Layout.vue";
import Circa from "@/paginae/Simpsons/Circa.vue";
import Collectione from "@/paginae/Simpsons/Collectione.vue";
import Character from "@/paginae/Simpsons/Character.vue";

export const router= createRouter({
    history: createWebHashHistory (import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Domus
        },{
            path: "/batman",
            name: "batman",
            component: Batman
        },{
            path: "/simpsons",
            children: [
             {
                path: '',
                name: "simpsons",
                component: Primus
             },
             {
                path: 'about',
                component: Layout,
                children: [
                    {
                        path: '',
                        name: "simpsons-about",
                        component: Circa
                    }
                ]
             },
             {
                path: 'gallery',
                component: Layout,
                children: [
                    {
                        path: '',
                        name: "simpsons-characters",
                        component: Collectione
                    },
                    {
                        path: ':id',
                        name: "simpsons-characters",
                        component: Character
                    }
                ]
             }
            ],
        },{
            path: "/indecision",
            name: "indecision",
            component: Responsum
        },{
            path: '/:pathMatch(.*)*',
            redirect: "/"
        }
    ]
})