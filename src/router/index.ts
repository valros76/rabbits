import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Le royaume des lapins",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        title: "Le royaume des lapins",
        description: "Bienvenue sur le royaume des lapins !",
        ogTitle: "Le royaume des lapins",
        ogDescription: "Bienvenue sur le royaume des lapins !",
        ogImage: "https://rabbits.webdevoo.com/assets/images/RabbitPortrait.png"
      }
    },
    {
      path: "/a-propos-des-lapins",
      name: "À propos des lapins",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
      meta: {
        title: "À propos des lapins",
        description: "Oryctolagus cuniculus : Le Lapin, Maître des Terriers et Conquérant du Monde",
        ogTitle: "À propos des lapins",
        ogDescription: "Oryctolagus cuniculus : Le Lapin, Maître des Terriers et Conquérant du Monde",
        ogImage: "https://rabbits.webdevoo.com/assets/images/rabbit01.gif"
      }
    },
    {
      path: "/balance-une-carotte",
      name: "Balance une carotte",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/CarrotView.vue"),
      meta: {
        title: "Balance une carotte",
        description: "L'expression Balance une carotte est notre manière amusante et positive de dire : Offre une petite attention, un encouragement, ou une reconnaissance à quelqu'un. Terminé la course aux lièvres solitaires !",
        ogTitle: "Balance une carotte",
        ogDescription: "L'expression Balance une carotte est notre manière amusante et positive de dire : Offre une petite attention, un encouragement, ou une reconnaissance à quelqu'un. Terminé la course aux lièvres solitaires !",
        ogImage: "https://rabbits.webdevoo.com/assets/images/RabbitGif.gif"
      }
    },
  ],
});

export default router
