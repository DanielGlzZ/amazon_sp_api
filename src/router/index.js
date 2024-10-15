import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Productos from '../components/Productos.vue';

const routes = [
   { path: '/', component: Login },
   { path: '/productos', component: Productos } // Agrega meta para requerir autenticación
];

const router = createRouter({
   history: createWebHistory(),
   routes
});

export default router;
