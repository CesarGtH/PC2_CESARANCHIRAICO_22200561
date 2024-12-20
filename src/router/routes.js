const routes = [
  {
    path: "/dashboard",
    component: () => import("pages/MoviePage.vue"),
  },

  {
    path: "/",
    component: () => import("components/auth/LoginForm.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
