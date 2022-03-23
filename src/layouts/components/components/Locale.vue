<template>
  <b-nav-item-dropdown
    id="dropdown-grouped"
    variant="link"
    class="dropdown-language"
    right
  >
    <template #button-content>
      <b-img
        :src="currentLocale.img"
        height="14px"
        width="22px"
        :alt="currentLocale.locale"
      />
      <span class="ml-50 text-body">{{ currentLocale.name }}</span>
    </template>
    <b-dropdown-item
      v-for="localeObj in locales"
      :key="localeObj.locale"
      @click="switchLocale(localeObj.locale)"
    >
      <b-img
        :src="localeObj.img"
        height="14px"
        width="22px"
        :alt="localeObj.locale"
      />
      <span class="ml-50">{{ localeObj.name }}</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { BNavItemDropdown, BDropdownItem, BImg } from "bootstrap-vue";
import Cookies from "js-cookie";
export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BImg,
  },
  // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {
    currentLocale() {
      return this.locales.find((l) => l.locale === this.$i18n.locale);
    },
  },
  setup() {
    /* eslint-disable global-require */
    const locales = [
      {
        locale: "en",
        img: require("@/assets/images/flags/en.png"),
        name: "English",
      },
      {
        locale: "ar",
        img: require("@/assets/images/flags/ar.png"),
        name: "عربي",
      },
    ];

    function switchLocale(locale) {
      // $i18n.locale = localeObj.locale;
      Cookies.set("locale", locale);
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
    /* eslint-disable global-require */

    return {
      locales,
      switchLocale,
    };
  },
};
</script>

<style></style>
