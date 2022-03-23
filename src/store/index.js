import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";

// Modules
import app from "./app";
import appConfig from "./app-config";
import verticalMenu from "./vertical-menu";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  state: {
    locale: Cookies.get("locale") || "en",
  },
  strict: process.env.DEV,
});
