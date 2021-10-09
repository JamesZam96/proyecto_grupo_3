import Vue from 'vue';
import Router from 'vue-router';
import Error404 from '@/views/Error404'
import Login from '@/views/auth/Login'
import RegisterUser from '@/views/auth/RegisterUser'
import CreateUser from '@/views/CreateUser'
import Home from '@/views/Home'
import RegisterClient from '@/views/RegisterClient'
import RegisterProduct from '@/views/RegisterProduct'
import RegisterProvider from '@/views/RegisterProvider'

import getPrueba from '@/views/getPrueba'

Vue.use(Router);

// export default new Router({
const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '*',
            name: 'Error404',
            component: Error404
        },
        {
            path: '/',
            name: 'Login',
            component: Login,
            meta:{
                isAuth: true
            }
        },
        {
            path: '/registeruser',
            name: 'RegisterUser',
            component: RegisterUser,
            meta:{
                isAuth: true
            }
        },
        {
            path: '/createuser',
            name: 'CreateUser',
            component: CreateUser,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/registerclient',
            name: 'RegisterClient',
            component: RegisterClient,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/registerproduct',
            name: 'RegisterProduct',
            component: RegisterProduct,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/registerprovider',
            name: 'RegisterProvider',
            component: RegisterProvider,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/getprueba',
            name: 'GetPrueba',
            component: getPrueba,
            meta:{
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to,from,next)=>{
    if (to.meta.requiresAuth){
        console.log(from)
        if (!localStorage.getItem('token')){
            next({
                name: 'Login'
            })
        }else{
            next()
        }
    }else{
        next()
    }

    if (to.meta.isAuth){
        // console.log(from)
        if (localStorage.getItem('token')){
            next({
                name: 'Home'
            })
        }else{
            next()
        }
    }else{
        next()
    }
})

export default router