<template>
  <div class="menu_drawer">
    <v-navigation-drawer
      :width="windowWidth <= 767 ? (windowWidth / 2) * 1.5 : 370"
      style="max-width: 85%"
      v-model="drawer"
      app
      temporary
      class="pr-2 pl-4 pt-1 pb-0"
    >
      <v-card class="px-0 shoppingCartHeader mt-0" elevation="0">
        <v-card-title
          class="px-0 d-flex justify-space-between align-center w-100 font-weight-bold"
        >
          Menu
          <v-icon color="black" class="pointer" @click="drawer = false">
            mdi-close
          </v-icon>
        </v-card-title>
        <v-list>
          <v-list-item
            class="px-0"
            v-for="cat in categories"
            :key="cat.route"
            @click="
              $router.push({
                name: 'products_category',
                query: { title: cat.title, category: cat.route },
              })
            "
          >
            <v-list-item-title class="Nav-link">
              {{ cat.title }}
            </v-list-item-title>
          </v-list-item>
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="pa-0">
                <v-list-item-title class="Nav-link">
                  Languages
                </v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item>
              <v-list-item-title
                class="d-flex align-center Nav-link"
                v-gap="'7px'"
              >
                <img src="@/assets/SVGS/en-lang.svg" width="25" alt="" />
                English
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                class="d-flex align-center Nav-link"
                v-gap="'7px'"
              >
                <img src="@/assets/SVGS/de-lang.svg" width="25" alt="" />
                Deutsch
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  props: {
    windowWidth: {
      type: Number,
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = true;
    });
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 767px) {
  .Nav-link {
    font-size: 12px;
  }
}
</style>
