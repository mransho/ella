<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper :products="FlashDeals" />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import ProductsSwiper from "@/components/home_page/ProductsSwiper.vue";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsSwiper,
  },
  computed: {
    ...mapState(productsModule, ["FlashDeals"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
