<template>
  <section>
    <b-row>
      <b-card>
        <b-row></b-row>
        <b-row></b-row>
      </b-card>
    </b-row>
  </section>
</template>

<script>
import { BCalendar, BRow, BCol, BCard } from "bootstrap-vue";
// import { codeMinMaxRange } from "./code";
export default {
  components: { BCalendar, BRow, BCol, BCard },
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // 15th two months prior
    const minDate = new Date(today);
    minDate.setMonth(minDate.getMonth() - 2);
    minDate.setDate(15);
    // 15th in two months
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate.setDate(15);
    return {
      value: "",
      min: minDate,
      max: maxDate,
      //   codeMinMaxRange,
    };
  },
};
</script>

<style></style>
