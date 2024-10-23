<template>
  <div class="ProductDetails mt-10">
    <h1 class="px-4">Product Details</h1>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="7"
          class="d-flex flex-column justify-space-between"
        >
          <div class="d-flex justify-center img-parent">
            <img
              :src="tab ? tab : SingleProduct.thumbnail"
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

          <v-tabs center-active class="mt-10" v-model="tab">
            <v-tab
              v-for="(img, i) in SingleProduct.images"
              :key="i"
              class="mx-0 mx-md-10 d-flex justify-center"
              :value="img"
            >
              <v-skeleton-loader
                v-if="loading"
                type="image, image, image"
              ></v-skeleton-loader>
              <img v-if="!loading" :src="img" alt="" width="100" height="100" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5" class="pt-0 pl-6 mt-2 mt-md-0">
          <v-skeleton-loader
            v-if="loading"
            type="article, article, article"
          ></v-skeleton-loader>

          <v-card
            elevation="0"
            class="d-flex flex-column h-100"
            v-if="!loading"
          >
            <v-card-title class="px-0">
              ({{ SingleProduct.title }}) sample -
              {{ SingleProduct.category }} for Sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" v-gap="'10px'">
              <v-rating
                v-model="SingleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="small"
                density="compact"
              >
              </v-rating>
              <span class="mt-1">Stock: {{ SingleProduct.stock }}</span>
            </div>
            <v-card-text class="description px-0 pb-2 py-3">
              {{ SingleProduct.description }}
            </v-card-text>
            <v-card-text class="brand px-0 mb-0 pb-2 pt-0">
              Brand {{ SingleProduct.brand }}
            </v-card-text>
            <v-card-text class="brand px-0 pb-2 pt-0">
              Availability:
              {{ SingleProduct.stock > 0 ? "in Stock" : "out of Stock" }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <del> ${{ SingleProduct.price }} </del> From
              <span class="price">
                ${{
                  Math.ceil(
                    SingleProduct.price -
                      SingleProduct.price *
                        (SingleProduct.discountPercentage / 100)
                  )
                }}
              </span>
            </v-card-text>
            <div class="d-flex align-center">
              <v-card-text class="pl-0 pt-0 pb-0 quantity">
                quantity
              </v-card-text>
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
                  class="text-center py-1"
                />
                <v-icon @click="quantity++"> mdi-plus </v-icon>
              </div>
            </div>
            <v-card-text class="pl-0">
              Subtotal: ${{
                Math.ceil(
                  SingleProduct.price -
                    SingleProduct.price *
                      (SingleProduct.discountPercentage / 100)
                ) * quantity
              }}
            </v-card-text>
            <v-card-actions class="w-100 px-0 justify-center">
              <v-btn
                variant="outlined"
                height="50"
                class="w-75 rounded-xl bg-black"
                density="compact"
                @click="addToCart(SingleProduct)"
                :loading="btnLoading"
              >
                Add To Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { cartStore } from "@/stores/cart";

export default {
  inject: ["Emitter"],
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
      }, 500);
    },
  },
  computed: {
    ...mapState(productsModule, ["SingleProduct"]),
  },
  data: () => ({
    loading: true,
    tab: "",
    quantity: 1,
    btnLoading: false,
    widthSkeletonImage: "",
  }),
  async beforeMount() {
    this.tab = "";
    await this.getSingleProduct(this.$route.params.productId);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },

  mounted() {
    this.widthSkeletonImage = window.innerWidth;
  },
};
</script>
<style scoped lang="scss">
.v-card-actions .v-btn {
  text-transform: none;
}
.v-card-title {
  font-size: 19px;
  font-weight: bold;
}
.description,
.brand,
.rating-parent span {
  color: #787878;
  font-size: 15px;
}
.img-parent img {
  max-height: 300px !important;
}
@media (max-width: 959px) {
  .img-parent img {
    max-height: 200px !important;
  }
  .v-tab img {
    max-height: 64px !important;
    max-width: 64px !important;
  }
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
.v-tab {
  width: 100px !important;
  height: 100px !important;
}
.quantity {
  max-width: 82px;
}
::v-deep .v-slide-group__content {
  justify-content: center;
}
</style>
