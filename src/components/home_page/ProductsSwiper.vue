<template>
  <div class="flash-deals pt-16 pb-13">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h2 :style="`color: ${titleColor}`">
        {{ title }}
      </h2>
      <a href="#" class="text-black">Shop All</a>
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      class="pb-10 px-5"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :loop="true"
    >
      <Swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent">
              <img
                :src="
                  showenItem[item.title]
                    ? showenItem[item.title]
                    : item.thumbnail
                "
                class="img-thumbnail"
                :style="`scale:${isHovering ? 1.05 : 1}`"
                alt=""
                v-bind="props"
              />
              <v-btn
                density="compact"
                variant="outlined"
                rounded="xl"
                width="60"
                height="30"
                class="bg-white quick-view-btn"
              >
                Quick View
              </v-btn>
            </div>
          </v-hover>
          <v-card-text class="text-clamp pl-0 pb-1">
            ({{ item.title }})
            {{ item.description }}
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
              rounded="xl"
              :replace="false"
            >
              <img :src="pic" class="item-pic" alt="" />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              density="compact"
              variant="outlined"
              class="py-2 px-12 choose-options"
              @click="
                $router.push({
                  name: 'products_details',
                  params: { productId: item.id },
                })
              "
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
import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
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
<style scoped lang="scss">
.title h2 {
  font-size: 30px;
  font-weight: 900;
}
.title a {
  font-size: 14px;
}
.img-thumbnail {
  width: 100%;
  height: 200px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  height: 100%;
}
.img-parent {
  height: 200px;
  overflow: hidden;
  position: relative;
  transition: 0.2 all ease-in-out;

  .quick-view-btn {
    border: 1px solid black;
    font-size: 12px;
    text-transform: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
}
.img-parent:hover {
  .quick-view-btn {
    opacity: 1 !important;
  }
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

.swiper-button-prev,
.swiper-button-next {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #c0c0c0;
  background-color: white;
  top: 40%;
  &::after {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
}

::v-deep .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
}
.text-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
