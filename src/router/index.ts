import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/IndexLayout/index.vue'),
  },
  {
    path: '/user',
    redirect: '/user/login',
    component: () => import("@/layouts/UserLayout/index.vue"),
    children: [
      {
        path: 'login',
        component: () => import('@/views/user/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/views/user/register.vue'),
      },
    ]
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login/index.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as any,
});

export default router;