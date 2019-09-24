
const routes = [
  {
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        name: 'index',
        meta: { auth: true },
        component: () => import('pages/Index.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/Login')
      },
      {
        path: '/logout',
        meta: { auth: true },
        name: 'logout',
        component: () => import('pages/Logout')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('pages/Register')
      },
      {
        path: '/account',
        meta: { auth: true },
        name: 'account',
        component: () => import('pages/Account')
      },
      {
        path: '/user',
        meta: { auth: true },
        name: 'users',
        component: () => import('pages/Users')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
