import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/hofladen/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/pages/ProductsPage.vue'),
    },
    {
      path: '/products/:id',
      name: 'product-detail',
      component: () => import('@/pages/ProductDetailPage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/ContactPage.vue'),
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('@/pages/Impressum.vue'),
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: () => import('@/pages/Datenschutz.vue'),
    },
    {
      path: '/admin',
      name: 'admin-login',
      component: () => import('@/pages/AdminLogin.vue'),
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: () => import('@/pages/AdminDashboard.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/products/new',
      name: 'admin-product-new',
      component: () => import('@/pages/AdminProductForm.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/products/:id',
      name: 'admin-product-edit',
      component: () => import('@/pages/AdminProductForm.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth)
  if (requiresAuth) {
    import('firebase/auth').then(({ getAuth }) => {
      const user = getAuth().currentUser
      if (!user) next('/admin')
      else next()
    })
  } else {
    next()
  }
})

export default router
