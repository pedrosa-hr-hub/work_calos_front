import { createRouter, createWebHistory } from "vue-router";

import Formulario from "../components/Formulario.vue";
import Login from "../components/Login.vue";
import Sintetico from "../components/Sintetico.vue";
import Dados from "../components/Dados.vue";

const routes = [
    {path: '/login', name: 'Login', component: Login},
    {path: '/', name: 'Formulario', component: Formulario},
    {path: '/dados', name: 'Dados', component: Dados},
    {path: '/sintetico', name: 'Sintetico', component: Sintetico},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;