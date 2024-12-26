import { createRouter, createWebHistory } from 'vue-router';
import { useTokenService } from '@/composable/use-token-service';

const tokenService = useTokenService();

const index = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			redirect(to) {
				return { name: 'Partner' };
			},
		},
		{
			path: '/partner',
			name: 'Partner',
			component: () => import('../views/partner/index.vue'),
		},
		{
			path: '/products',
			name: 'Products',
			component: () => import('../views/products/index.vue'),
		},
		{
			path: '/auth/login',
			name: 'Login',
			component: () => import('../views/auth/login.vue'),
		},
	],
});

// Navigation Guard
index.beforeEach((to, from, next) => {
	const isAuthenticated = tokenService.getAccessToken() !== null;
  
	if (!isAuthenticated && to.name !== 'Login') {
	  // Redirect to login page if the user is not authenticated
	  next({ name: 'Login' });
	} else {
	  // Allow access
	  next();
	}
  });

export default index;
