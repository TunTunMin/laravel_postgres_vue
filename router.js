import {createRouter, createWebHistory} from 'vue-router';
import Login from './src/components/Login';
import  App  from './src/App.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App,
        meta: { public: true}

    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { public: true}
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');

    if(!to.meta.public && !isAuthenticated){
        next({path: '/login'})
    }else{
        next();
    }
})
export default router;