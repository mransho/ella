<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsComponent
      :products="FlashDeals"
      title="Flash Deals"
      titleColor="#ff0303"
      :index="0"
    />
    <TopCategory />
    <NewProduct :index="1" :products="newProducts" />
    <QualityFeatures />
    <ProductsComponent
      :products="mobilePhones"
      title="Top Mobile Phones"
      titleColor="rgb(94 76 110)"
      :index="0"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <img
            src="@/assets/images/band-left-cover.webp"
            alt=""
            class="w-100"
          />
        </v-col>
        <v-col cols="12" md="6">
          <img
            src="@/assets/images/band-right-cover.webp"
            alt=""
            class="w-100"
          />
        </v-col>
      </v-row>
    </v-container>

    <ProductsComponent
      :products="fragrances"
      title="Top Fragrances"
      titleColor="rgb(94 76 110)"
      :index="4"
    />
    <v-container fluid>
      <v-row class="tv-banner">
        <v-col style="min-width: 800px">
          <img src="@/assets/images/tv-banner.webp" alt="" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      :products="furniture"
      title="Top furniture"
      titleColor="rgb(94 76 110)"
      :index="2"
    />
    <WhyShopWithUs />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import ProductsComponent from "@/components/home_page/ProductsSwiper.vue";
import TopCategory from "@/components/home_page/TopCategory.vue";
import NewProduct from "@/components/home_page/NewProduct.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import WhyShopWithUs from "@/components/home_page/WhyShopWithUs.vue";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategory,
    NewProduct,
    QualityFeatures,
    WhyShopWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "FlashDeals",
      "newProducts",
      "mobilePhones",
      "fragrances",
      "furniture",
    ]),
  },
  methods: {
    ...mapActions(productsModule, [
      "getProducts",
      "getlaptop",
      "getPhones",
      "getFragrances",
      "getFurniture",
    ]),
  },
  async mounted() {
    await this.getProducts();
    await this.getlaptop();
    await this.getPhones();
    await this.getFragrances();
    await this.getFurniture();
  },
};
</script>
<style scoped lang="scss">
.tv-banner {
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    width: 0px;
  }
}
</style>
