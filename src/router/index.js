import { createRouter, createWebHistory } from "vue-router";

import Formulario from "../components/Formulario.vue";
import Login from "../components/Login.vue";
import Graficos from "../components/Graficos.vue";
import Dados from "../components/Dados.vue";

const routes = [
    {path: '/', name: 'Login', component: Login},
    {path: '/voto', name: 'Formulario', component: Formulario},
    {path: '/dados', name: 'Dados', component: Dados},
    {path: '/graficos', name: 'Graficos', component: Graficos},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;