<template>
  <div class="ProductDetails mt-16">
    <h1>Product Details</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <div class="d-flex justify-center">
            <img
              :src="tab ? tab : SingleProduct.thumbnail"
              height="500"
              alt=""
              v-if="!loading"
            />
          </div>
          <v-skeleton-loader
            v-if="loading"
            type="image, image, image"
          ></v-skeleton-loader>

          <v-tabs center-active class="mt-10" v-model="tab">
            <v-tab
              v-for="(img, i) in SingleProduct.images"
              :key="i"
              class="mx-10 d-flex justify-center"
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
        <v-col cols="5" class="pt-0 pl-6">
          <v-skeleton-loader
            v-if="loading"
            type="article, article, article"
          ></v-skeleton-loader>

          <v-card elevation="0" v-if="!loading">
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
            <v-card-text class="description px-0">
              {{ SingleProduct.description }}
            </v-card-text>
            <v-card-text class="brand px-0 pt-0">
              Brand {{ SingleProduct.brand }}
            </v-card-text>
            <v-card-text class="brand px-0 pt-0">
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
                  SingleProduct.price -
                    SingleProduct.price *
                      (SingleProduct.discountPercentage / 100)
                ) * quantity
              }}
            </v-card-text>
            <v-card-actions class="mt-7 w-100 px-0">
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
  }),
  async beforeMount() {
    this.tab = "";
    await this.getSingleProduct(this.$route.params.productId);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
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
</style>
