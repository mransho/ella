<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" temporary app location="right">
      <p>X</p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "cartDrawer",
  data: () => ({
    drawer: false,
  }),
  inject: ["Emitter"],
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
