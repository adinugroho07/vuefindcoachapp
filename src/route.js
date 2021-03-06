import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import Login from './pages/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'coaches',
        },
        {
            name: 'coaches',
            path: '/coaches',
            component: CoachList
        },
        {
            name: 'coaches-details',
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {
                    name: 'coaches-contact',
                    path: 'contact',
                    component: ContactCoach,
                },//coaches/:id/contact
            ]
        },
        {
            name: 'register',
            path: '/register',
            component: CoachRegistration
        },
        {
            name: 'request',
            path: '/request',
            component: RequestsReceived
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'logout',
            path: '/logout',
            redirect: '/coaches'
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

export default router;