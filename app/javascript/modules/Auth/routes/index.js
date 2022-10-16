export const auth = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/modules/Auth/pages/AuthenticationPage.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/modules/Auth/pages/Main.vue')   
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/modules/Auth/pages/MyProfile.vue')   
  },
  {
    path: '/editpage',
    name: 'EditPage',
    component: () => import('@/modules/Auth/pages/EditPage.vue')   
  }
]
