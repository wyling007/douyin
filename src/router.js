import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            redirect: 'index'
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home.vue'),
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: () => import('./views/index/index.vue'),
                },
                {
                    path: '/follow',
                    name: 'follow',
                    component: () => import('./views/follow/follow.vue')
                },
                {
                    path: '/me',
                    name: 'me',
                    component: () => import('./components/me/me.vue'),
                },
                {
                    path: '/msg',
                    name: 'msg',
                    component: () => import('./views/msg/msg.vue'),
                },
            ]
        },
        {
            path: '/sign',
            name: 'sign',
            component: () => import('./views/sign.vue'),
        },
        {
            path: '/sign2',
            name: 'sign2',
            component: () => import('./views/sign2.vue'),
        },
        {
            path: '/header',
            name: 'header',
            component: () => import('./components/header/header.vue'),
        },
        {
            path: '/edit',
            name: 'edit',
            component: () => import('./components/me/edit/edit.vue'),
        }
    ]
})
export default router