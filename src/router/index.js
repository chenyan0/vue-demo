import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Schedule from '@/components/Schedule'
import  Home from '@/pages/home'
import  MallHome from '@/pages/mall/index'
import  DetailPage from '@/pages/mall/detail'

Vue.use(Router)
const router=new Router({
//    mode:'history',
    routes: [ {
        path: '/',
        name: 'Home',
        component: Home,    
        redirect:'/schedule',
        children:[
            {
                path:'/schedule',
                component:Schedule,
                meta: {
                    title: '行程表'
                }
            },{
                 path:'/mall',
                component:MallHome,
                 meta: {
                    title: '商城'
                }
            },
            {
                 path:'detail/:id',
                component:DetailPage,
                 meta: {
                    title: '商品详情'
                }
            }],
     
    }   ,
     
            //  { /* Not Found 路由，必须是最后一个路由 */
            // path: '*',
            // component: NotFound,
            // meta: {
            //     title: '找不到页面'
            // }
            // }
        
         {
        path: '/login',
        name: 'Login',
        component: Login,
         meta: {
        title: '登陆入口'
      }   
    }]
})

export default router;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})