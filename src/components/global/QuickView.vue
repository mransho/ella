<template>
  <div class="quick-view" v-if="$route.name != 'CheckOut'">
    <v-dialog max-width="900" v-model="dialog">
      <v-icon class="icon-close" @click="dialog = false"> mdi-close </v-icon>
      <v-card elevation="0" class="content_card">
        <v-container class="bg-white pa-2 pt-md-10 pb-md-5 px-md-10" fluid>
          <v-row>
            <v-col cols="12" md="7">
              <div class="d-flex img-parent justify-center">
                <img
                  :src="tab ? tab : product.thumbnail"
                  alt=""
                  v-if="!loading"
                />
              </div>
              <v-skeleton-loader
                v-if="loading"
                :type="`${
                  widthSkeletonImage < 960 ? 'image' : 'image, image, image'
                }`"
              ></v-skeleton-loader>

              <v-tabs
                center-active
                class="mt-3 mt-md-10 mb-3 my-md-0"
                v-model="tab"
              >
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10 d-flex justify-center"
                  :value="img"
                >
                  <v-skeleton-loader
                    v-if="loading"
                    type="image, image, image"
                  ></v-skeleton-loader>
                  <img v-if="!loading" class="img-tab" :src="img" alt="" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5" class="pt-0 pl-6 mt-md-5 mt-md-0">
              <v-skeleton-loader
                v-if="loading"
                type="article, article, article"
              ></v-skeleton-loader>

              <v-card elevation="0" v-if="!loading">
                <v-card-title class="px-0"
                  >({{ product.title }}) sample - {{ product.category }} for
                  Sale
                </v-card-title>
                <div class="rating-parent d-flex align-center" v-gap="'10px'">
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="small"
                    density="compact"
                  >
                  </v-rating>
                  <span class="mt-1">Stock: {{ product.stock }}</span>
                </div>
                <v-card-text class="description px-0">
                  {{ product.description }}
                </v-card-text>
                <v-card-text class="brand px-0 pt-0 pb-0">
                  Brand: {{ product.brand }}
                </v-card-text>
                <v-card-text class="brand px-0 pt-0">
                  Availability:
                  {{ product.stock > 0 ? "in Stock" : "out of Stock" }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  <del> ${{ product.price }} </del> From
                  <span class="price">
                    ${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span>
                </v-card-text>
                <v-card-text class="pl-0 pt-0"> quantity </v-card-text>
                <div class="counter px-1">
                  <v-icon size="20" @click="quantity > 1 ? quantity-- : false">
                    mdi-minus
                  </v-icon>
                  <input
                    readonly
                    type="number"
                    min="1"
                    v-model="quantity"
                    name=""
                    id=""
                    class="text-center py-3"
                  />
                  <v-icon size="20" @click="quantity++"> mdi-plus </v-icon>
                </div>
                <v-card-text class="pl-0">
                  Subtotal: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions class="mt-2 w-100 px-0 justify-center">
                  <v-btn
                    variant="outlined"
                    height="50"
                    class="w-75 rounded-xl bg-black"
                    density="compact"
                    @click="addToCart(product), (quantity = 1)"
                    :loading="btnLoading"
                  >
                    Add To Cart
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  data: () => ({
    loading: true,
    dialog: false,
    tab: "",
    quantity: 1,
    product: {},
    btnLoading: false,
    widthSkeletonImage: "",
  }),
  inject: ["Emitter"],
  watch: {
    dialog(value) {
      if (value == true) {
        this.loading = true;
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 500);
    },
  },
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.product = data;
      this.dialog = true;
      this.tab = "";
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
    this.widthSkeletonImage = window.innerWidth;
  },
};
</script>
<style scoped lang="scss">
.content_card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(173 173 173);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(228 227 227);
  }
}
.icon-close {
  position: absolute;
  right: -14px;
  top: -14px;
  background-color: black;
  color: #d2d2d2;
  font-size: 18px;
  padding: 13px;
  z-index: 5;
}
.v-card-actions .v-btn {
  text-transform: none;
}
.img-parent img {
  height: 400px;
}
.img-tab {
  height: 100px;
}
.v-card-title {
  font-size: 19px;
  font-weight: bold;
  white-space: pre-wrap;
}
.description,
.brand,
.rating-parent span {
  color: #787878;
  font-size: 15px;
}
span.price {
  font-weight: 900;
  font-size: 16px;
}
.counter {
  border-radius: 30px;
  border: 1px solid #a8a8a8;
  width: fit-content;
}
.counter input {
  border: none;
  outline: none;
  width: 60px;
  font-size: 13px;
}
.v-tabs {
  height: 100px;
}
::v-deep .v-slide-group__content {
  gap: 50px;
}
.v-tab {
  width: 100px !important;
  height: 100px !important;
  margin-inline: 0px !important;
}
@media (max-width: 959px) {
  .img-parent img {
    height: 150px;
  }
  .v-tabs {
    height: 50px;
  }
  .v-tab {
    width: 50px !important;
    height: 50px !important;
    margin-inline: 50px !important;
  }
  .img-tab {
    height: 50px;
  }
  ::v-deep .v-slide-group__content {
    justify-content: center;
    button {
      margin-inline: 0px !important;
    }
  }
  .v-dialog {
    max-width: 700px;
    max-height: 100%;
  }
}
</style>
