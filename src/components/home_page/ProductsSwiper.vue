<template>
  <div class="flash-deals pt-16 px-5">
    <Swiper
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      class="pb-10"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <Swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <img
            :src="
              showenItem[item.title] ? showenItem[item.title] : item.thumbnail
            "
            class="img-thumbnail"
            alt=""
          />
          <v-card-text class="pl-0 pb-1">
            ({{ item.title }})
            {{
              item.description.split(" ").length <= 8
                ? item.description
                : item.description.split(" ").slice(0, 8).join(" ") + " ..."
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            color="yellow-darken-2"
            size="small"
            density="compact"
          >
          </v-rating>
          <v-card-text class="pl-0 pt-0">
            <del> ${{ item.price }} </del> From
            <span class="text-red price">
              ${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}
            </span>
          </v-card-text>
          <v-btn-toggle v-model="showenItem[item.title]">
            <v-btn
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              size="x-small"
            >
              <img :src="pic" class="item-pic" alt="" />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              density="compact"
              variant="outlined"
              class="py-2 px-12 choose-options"
            >
              choose options
            </v-btn>
          </div>
        </v-card>
      </Swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

export default {
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>
<style scoped>
.img-thumbnail {
  width: 100%;
  height: 200px;
}
.item-pic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0.5px solid #cacaca;
}
span.price {
  font-weight: 900;
  font-size: 16px;
}
.choose-options {
  text-transform: none;
  border-radius: 30px;
}
</style>
