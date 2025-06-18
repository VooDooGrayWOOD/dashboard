import { createRouter, createWebHistory } from 'vue-router';
import { Projects, Tasks, Settings, Profile, Login, Page404 } from '@/pages';

const routes = [
  { path: '/', redirect: '/projects' },
  { path: '/projects', component: Projects, name: 'projects' },
  { path: '/tasks', component: Tasks, name: 'tasks' },
  { path: '/settings', component: Settings, name: 'settings' },
  { path: '/profile', component: Profile, name: 'profile' },
  { path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', component: Page404, name: 'not_found' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
