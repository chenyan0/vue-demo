import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Table from '@/components/Table'
import  Home from '@/pages/home'
import  MallHome from '@/pages/mall/index'
import  DetailPage from '@/pages/mall/detail'

Vue.use(Router)
const router=new Router({

})

export default new Router({
    mode:'history',
    routes: [{
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/',
        name: 'Home',
        component: Home,    
        redirect:'/table',
        children:[
            {
                path:'/table',
                component:Table
            },{
                 path:'/mall',
                component:MallHome
            },
            {
                 path:'detail/:id',
                component:DetailPage
            }
        ]   
    }]
})

