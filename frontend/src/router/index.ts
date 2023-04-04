import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import store from "@/store";
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/register.vue'
import register from "@/views/register.vue"
import Detail from "@/views/detail.vue"
import Add from "@/views/Add.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/article/:slug',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/add',
        name: 'add',
        component: Add,
        meta: {loginRequierd: true}
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }, {
        path: '/profile',
        name: 'about',
        component: ProfileView,
        meta: {loginRequierd: true}
    }, {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {loginRedirect: true}
    }, {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: {loginRequierd: true}
    },
    {
        path: '/register',
        name: 'register',
        component: register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.loginRequierd)) {
        if (store.state.isAuthenticated) {
            next()
        } else {
            next('/login')
        }

    } else if (to.matched.some(record => record.meta.loginRedirect)) {
        if (!store.state.isAuthenticated) {
            next()
        } else {
            next('/profile')
        }
    } else {
        next()
    }
})
export default router
