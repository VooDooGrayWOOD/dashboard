import { createRouter, createWebHistory } from 'vue-router';
import {
  Projects,
  Tasks,
  Profile,
  Login,
  Page404,
  Equipment,
  ManagementSettings,
  ManufactureSettings,
  Workshops,
} from '@/pages';

const routes = [
  { path: '/', redirect: '/management/projects' },

  // Management
  {
    path: '/management',
    children: [
      {
        path: 'projects',
        component: Projects,
        name: 'management.projects',
        meta: { key: 'management' },
      },
      {
        path: 'tasks',
        component: Tasks,
        name: 'management.tasks',
        meta: { key: 'management' },
      },
      {
        path: 'settings',
        component: ManagementSettings,
        name: 'management.settings',
        meta: { key: 'management' },
      },
    ],
  },

  // Manufacture
  {
    path: '/manufacture',
    children: [
      {
        path: 'equipment',
        component: Equipment,
        name: 'equipment.title',
        meta: { key: 'manufacture' },
      },
      {
        path: 'workshop',
        component: Workshops,
        name: 'productionWorkshop.plural',
        meta: { key: 'manufacture' },
      },
      {
        path: 'settings',
        component: ManufactureSettings,
        name: 'manufacture.settings',
        meta: { key: 'manufacture' },
      },
    ],
  },

  { path: '/profile', component: Profile, name: 'profile' },
  { path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', component: Page404, name: 'not_found' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
