import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('./views/MainPage')
    },
    {
        path: '*',
        name: 'ErrorPage',
        component: () => import('./views/ErrorPage')
    }
];

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    routes
});


export default router;