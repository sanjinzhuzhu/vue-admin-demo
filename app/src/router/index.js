import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter)

//1.引入MyZone
//import MyZone from '@/views/MyZone'
export default new VueRouter({
    routes: [

        {
            path: "/login",
            component: () => import("@/views/Login")
        },
        {
            path: "/myzone",
            component: () => import("@/views/MyZone"),
            meta: { show: false },

            children: [
                {
                    path: "/mylearning",
                    component: () => import("@/views/MyZone/MyLearning"),
                    meta: { show: false },
                },
                {
                    path: "/workspace",
                    component: () => import("@/views/MyZone/WorkSpace"),
                    meta: { show: false },
                },

            ]
        },
        {
            path: '*',
            redirect: "/login"
        }

    ]
})
