<template>
  <div class="products-category mt-10">
    <h1 class="text-center">{{ $route.query.title }}</h1>
    <v-container>
      <v-row class="d-flex align-center" v-if="loading">
        <v-col cols="3" v-for="num in 4" :key="num">
          <v-skeleton-loader type="image, article, button"></v-skeleton-loader>
        </v-col>
      </v-row>

      <v-card v-else elevation="0">
        <v-row>
          <v-col
            cols="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
          >
            <v-lazy>
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
                      width="100"
                      height="30"
                      class="bg-white quick-view-btn"
                      @click="openQuickView(item)"
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
                        item.price -
                          item.price * (item.discountPercentage / 100)
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
                    width="220"
                    height="35"
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
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  data: () => ({
    showenItem: {},
    loading: true,
  }),
  inject: ["Emitter"],
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  watch: {
    async $route() {
      if (this.$route.name == "products_category") {
        document.documentElement.scrollTo(0, 0);
        this.loading = true;
        await this.getProductsByCategory(this.$route.query.category);
        setTimeout(() => {
          this.loading = false;
        }, 500);
        console.log("fired");
      }
    },
  },
  async mounted() {
    if (!this.$route.query.category) {
      return this.$router.go(-1);
    }
    await this.getProductsByCategory(this.$route.query.category);
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
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
  transition: 0.2s all ease-in-out;

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
.swiper-pagination-bullet-active {
  background-color: blue !important;
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
