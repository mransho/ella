<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main>
        <slot></slot>
      </v-main>
      <appNav />
      <FixedNav />
      <AppFooter />
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
<style scoped>
.v-main {
  padding-top: 156px;
}
</style>
