<template>
  <section>
    <div>
      <b-row>
        <b-col>
          <!-- card 1 -->
          <b-card>
            <b-card-text>
              <b-row>
                <b-col>
                  <b-button @click="showCalender = !showCalender">
                    <feather-icon icon="CalendarIcon" />
                  </b-button>
                  <div>
                    <b-calendar
                      v-if="showCalender"
                      :min="min"
                      :max="max"
                      v-model="value"
                    />
                  </div>
                </b-col>
                <b-col>
                  <b-row>
                    <b-button>
                      <feather-icon icon="ChevronsLeftIcon" />
                    </b-button>

                    <b-row>
                      <b-col> 1 </b-col>
                      <b-col> 1 </b-col>
                      <b-col> 1 </b-col>
                      <b-col> 1 </b-col>
                      <b-col> 1 </b-col>
                    </b-row>

                    <b-button>
                      <feather-icon icon="ChevronsRightIcon" />
                    </b-button>
                  </b-row>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BCardText,
  BButton,
  BCalendar,
} from "bootstrap-vue";

// import { codeMinMaxRange } from "./code";
export default {
  components: { BCard, BRow, BCol, BCardText, BButton, BCalendar },

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
      showCalender: false,
      //   codeMinMaxRange,
    };
  },
};
</script>

<style></style>
