export default [
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/error/Error404.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
      action: "read",
    },
  },
  {
    path: "/login",
    name: "auth-login",
    component: () => import("@/views/pages/authentication/Login.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/register",
    name: "auth-register",
    component: () => import("@/views/pages/authentication/Register.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/forgot-password",
    name: "auth-forgot-password",
    component: () => import("@/views/pages/authentication/ForgotPassword.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/pages/account-setting",
    name: "pages-account-setting",
    component: () => import("@/views/pages/account-setting/AccountSetting.vue"),
    meta: {
      pageTitle: "Account Settings",
      breadcrumb: [
        {
          text: "Pages",
        },
        {
          text: "Account Settings",
          active: true,
        },
      ],
    },
  },
  {
    path: "/pages/profile",
    name: "pages-profile",
    component: () => import("@/views/pages/profile/Profile.vue"),
    meta: {
      pageTitle: "Profile",
      breadcrumb: [
        {
          text: "Pages",
        },
        {
          text: "Profile",
          active: true,
        },
      ],
    },
  },

  {
    path: "/pages/faq",
    name: "pages-faq",
    component: () => import("@/views/pages/faq/Faq.vue"),
    meta: {
      pageTitle: "FAQ",
      breadcrumb: [
        {
          text: "Pages",
        },
        {
          text: "FAQ",
          active: true,
        },
      ],
    },
  },
];
