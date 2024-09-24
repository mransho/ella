<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main>
        <slot></slot>
      </v-main>
      <appNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import appNav from "./appNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
export default {
  name: "appLayout",
  components: {
    appNav,
    AppFooter,
    CartDrawer,
  },
};
</script>
<style scoped>
.v-main {
  padding-top: 156px;
}
</style>
