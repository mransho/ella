<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
  },
};
</script>
