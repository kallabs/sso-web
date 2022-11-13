import { createRouter, createWebHistory } from 'vue-router'

import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
        { 
            path: '/signup', 
            component: Signup,
            children: [{
                  path: ':token',
                  component: SignupConfirmation,
            }],
        },
    ],
})
