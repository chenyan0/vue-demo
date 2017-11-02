import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Tasks from '@/pages/task/tasks'
import Todo from '@/pages/task/todo'
import AddTask from '@/pages/task/add-task'
import  Home from '@/pages/home'
import  MallHome from '@/pages/mall/index'
import  DetailPage from '@/pages/mall/detail'
import  OrderList from '@/pages/mall/orderList'

Vue.use(Router)
const router=new Router({
//    mode:'history',
    routes: [ {
        path: '/',
        name: 'Home',
        component: Home,    
        redirect:'/tasks',
        children:[
            {
                path:'/tasks',
                component:Tasks,
                redirect:'/todo',
                children:[
                    {
                        path:'/todo',
                        component:Todo,
                        meta: {
                            title: '活动中心'
                        }
                        
                    },
                    {
                        path:'/addTask',
                        component:AddTask,
                        meta: {
                            title: '新增活动'
                        }
                        
                    }
                ],
              
            },{
                 path:'/mall',
                component:MallHome,
                 meta: {
                    title: '在线商城'
                }
            },
            {
                 path:'detail/:id',
                component:DetailPage,
                 meta: {
                    title: '商品详情'
                }
            },
             {
                 path:'orderList',
                component:OrderList,
                 meta: {
                    title: '订单列表'
                }
            }
            ],
     
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