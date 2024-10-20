<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer v-if="$route.name != 'CheckOut'" />
      <v-main
        :style="`padding-top: ${$route.name == 'CheckOut' ? '0px' : '156px'};`"
      >
        <slot></slot>
      </v-main>
      <appNav v-show="$route.name != 'CheckOut'" />
      <FixedNav v-show="$route.name != 'CheckOut'" />
      <AppFooter v-show="$route.name != 'CheckOut'" />
    </v-layout>
  </div>
</template>

<script>
import appNav from "./appNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import FixedNav from "./FixedNav.vue";
export default {
  name: "appLayout",
  components: {
    appNav,
    AppFooter,
    CartDrawer,
    FixedNav,
  },
};
</script>
<style scoped></style>
