<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer v-if="$route.name != 'CheckOut'" :windowWidth="windowWidth" />
      <MenuDrawer v-if="$route.name != 'CheckOut'" :windowWidth="windowWidth" />
      <v-main
        :style="`padding-top: ${
          $route.name == 'CheckOut'
            ? '0px'
            : windowWidth <= 1330
            ? '62px'
            : '156px'
        };`"
      >
        <slot></slot>
      </v-main>
      <appNav v-show="windowWidth > 1330 && $route.name != 'CheckOut'" />
      <ResponsiveNav
        v-show="windowWidth <= 1330 && $route.name != 'CheckOut'"
      />
      <FixedNav v-show="windowWidth > 1330 && $route.name != 'CheckOut'" />
      <AppFooter v-show="$route.name != 'CheckOut'" />
    </v-layout>
  </div>
</template>

<script>
import appNav from "./appNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import FixedNav from "./FixedNav.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDrawer from "./MenuDrawer.vue";
export default {
  name: "appLayout",
  components: {
    appNav,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  data: () => ({
    windowWidth: 0,
  }),
  mounted() {
    this.windowWidth = window.innerWidth;
    console.log(this.windowWidth);
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    };
  },
};
</script>
<style scoped></style>
