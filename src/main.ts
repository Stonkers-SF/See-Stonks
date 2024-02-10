import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Home from "./layout/Home.vue";
import NotFound from "./layout/NotFound.vue";
import Login from './layout/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/Login', component: Login },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ]
});

const app = createApp(App);

app.use(router);

app.mount("#app");
