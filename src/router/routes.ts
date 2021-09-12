import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'department', component: () => import('pages/Department.vue') },
      { path: 'mentors', component: () => import('pages/Mentors.vue') },
      { path: 'index', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'questions', component: () => import('pages/Questions.vue') },
      {
        path: 'profile',
        component: () => import('pages/Profile.vue'),
        meta: {
          requiresAuth: true
        }
      },
      { 
        path: 'admin',
        component: () => import('pages/Admin.vue'),
        meta: {
          requiresAuth: true,
          isAdmin: true
        },
        children: [
          { path: '', component: () => import('pages/Admin/Index.vue') },
          { path: 'questions', component: () => import('pages/Admin/Questions.vue') },
          { path: 'user', component: () => import('pages/Admin/User.vue') },
        ]
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
