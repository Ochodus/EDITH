import { createWebHistory, createRouter} from 'vue-router';
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'

const routes = [
    {
      path: "/", // [경로]
      name: "login", // [이름]
      msg: "d",
      component: Login
    },
    {
      path: "/main", // [경로]
      name: "main", // [이름]
      msg: "d",
      component: Main
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;