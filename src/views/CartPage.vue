<template>
  <div class="CartPage">
    <v-container fluid>
      <v-row class="px-6">
        <v-col cols="12" class="pt-5 breadcrumbs pb-0 px-0">
          <v-breadcrumbs :items="['Home', 'Your Cart']">
            <template v-slot:divider>
              <v-icon color="878484"> mdi-chevron-right </v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" class="pt-5 px-0 overflow-hidden">
          <v-card-title
            class="Your-Cart px-0 d-flex justify-space-between align-center w-100"
          >
            Your Cart
          </v-card-title>
          <div
            class="bar-parent mt-4 position-relative"
            v-if="cartItems.length"
          >
            <svg
              class="icon-shipping-truck"
              width="30"
              viewBox="0 0 40.55 24"
              :fill="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? '#F44336'
                  : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? '#ff9800 '
                  : '#4CAF50'
              "
              :style="`
                  left: calc(${
                    parseInt((calcTotalPrice / 10000) * 100) <= 100
                      ? parseInt((calcTotalPrice / 10000) * 100)
                      : 100
                  }% - 30px); 
                  position: absolute;
                  bottom: 50%;
                  z-index: 1;
                  transition: 0.2s all ease-in-out; 
                  `"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="truck-body"
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                  ></path>
                  <path
                    class="truck-body"
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                  ></path>
                </g>
              </g>
            </svg>

            <v-progress-linear
              :color="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? 'red'
                  : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? 'orange'
                  : 'green'
              "
              height="10"
              striped
              style="transition: 0.2s all ease-in-out"
              :model-value="
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              "
            >
            </v-progress-linear>
          </div>
          <v-card-text class="px-0 pt-3 pb-2" v-if="!cartItems.length">
            Free shipping for all orders over $10000.00!
          </v-card-text>

          <v-card-text
            class="px-0 pt-3 pb-2"
            v-if="cartItems.length && 10000 - calcTotalPrice > 0"
          >
            only ${{ 10000 - calcTotalPrice }} away from free shipping
          </v-card-text>

          <v-card-text
            class="px-0 pt-3 pb-2"
            v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
          >
            Your Order Now Is Included Free Shipping
          </v-card-text>

          <v-card-text
            class="px-0 pt-3 pb-2 mt-10 text-center"
            v-if="!cartItems.length"
          >
            your cart is empty!
          </v-card-text>

          <v-cart-actions
            v-if="!cartItems.length"
            class="px-0 mt-10 d-flex justify-center flex-column"
            v-gap="'15px'"
          >
            <v-btn
              class="mx-auto font-weight-bold text-none rounded-xl"
              width="300"
              variant="outlined"
              elevation="0"
              density="compact"
              height="45"
              color="rgb(27 60 247)"
              @click="$router.push({ name: 'home' })"
            >
              continue shopping
            </v-btn>
          </v-cart-actions>
        </v-col>
        <v-col v-if="cartItems.length" cols="8" class="px-3">
          <v-table class="w-100">
            <thead>
              <tr>
                <th>{{ `product`.toUpperCase() }}</th>
                <th class="text-center">{{ `price`.toUpperCase() }}</th>
                <th class="text-center">{{ `quantity`.toUpperCase() }}</th>
                <th class="text-center">{{ `total`.toUpperCase() }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td style="width: 55%">
                  <v-row class="align-center">
                    <v-col cols="5">
                      <img :src="item.thumbnail" class="w-100" alt="" />
                    </v-col>
                    <v-col cols="7">
                      <v-card-title class="px-0 item-title pr-2">
                        {{ item.title }} sample - {{ item.category }}
                      </v-card-title>
                      <v-card-text class="px-0 pb-0">
                        Category {{ item.category }}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </td>
                <td style="width: 15%" class="text-center">
                  <v-card-text class="px-0 pt-2 price">
                    ${{ item.price }}
                  </v-card-text>
                </td>
                <td style="width: 15%" class="text-center">
                  <div
                    class="item-footer d-flex justify-space-between align-center"
                  >
                    <div class="counter px-1">
                      <v-icon
                        size="17"
                        color="#909090"
                        @click="
                          item.quantity > 1
                            ? (item.quantity--, setToLocalStorage())
                            : false
                        "
                      >
                        mdi-minus
                      </v-icon>
                      <input
                        readonly
                        type="number"
                        min="1"
                        v-model="item.quantity"
                        name=""
                        id=""
                        class="text-center py-3"
                      />
                      <v-icon
                        size="17"
                        color="#909090"
                        @click="item.quantity++, setToLocalStorage()"
                      >
                        mdi-plus
                      </v-icon>
                    </div>
                  </div>
                </td>
                <td style="width: 15%" class="px-0 text-center price">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    ) * item.quantity
                  }}
                </td>
                <td class="text-center">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-icon
                      @click="deleteItem(item.id)"
                      :color="isHovering ? 'red' : 'black'"
                      class="pointer mr-2"
                      size="20"
                      v-bind="props"
                    >
                      {{
                        isHovering
                          ? "mdi-delete-empty"
                          : "mdi-trash-can-outline"
                      }}
                    </v-icon>
                  </v-hover>
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-divider length="100%" class="mt-5" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>

          <v-card-text
            class="px-0 pt-5 pb-2 d-flex align-center"
            v-gap="'10px'"
            v-if="cartItems.length"
          >
            <span class="d-flex align-center">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 179.94 179.96"
                class="icon icon-shield-check"
                width="30"
              >
                <path
                  d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
                ></path>
                <polygon
                  fill="white"
                  class="cls-1"
                  points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
                ></polygon>
              </svg>
            </span>
            <span>secure shopping guarantee</span>
          </v-card-text>
          <img
            src="@/assets/images/cart-page-cards.webp"
            width="270"
            class="cart-page-cards"
            alt=""
          />
        </v-col>
        <v-col cols="4" class="px-3" v-if="cartItems.length">
          <v-card elevation="0">
            <v-card-title class="Order-Summary"> Order Summary </v-card-title>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex justify-space-between">
              <span>subtotal: </span>
              <span class="font-weight-bold" style="font-size: 16px">
                ${{ calcTotalPrice }}
              </span>
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>

            <v-card-text> get shipping estimate: </v-card-text>

            <select name="" id="" class="w-100 pa-3 rounded-xl">
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>

            <div class="states mt-4">
              <select name="" id="" class="pa-3 rounded-xl">
                <option
                  :value="country"
                  v-for="country in countries"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <input type="text" name="" class="w-43 pa-3 rounded-xl" id="" />
            </div>

            <v-cart-actions class="px-0">
              <v-btn
                class="Check-Out text-white my-5 font-weight-bold w-100 rounded-xl text-none"
                variant="elevated"
                elevation="0"
                density="compact"
                height="45"
                color="rgb(27 60 247)"
              >
                Calculate Shipping
              </v-btn>
            </v-cart-actions>

            <v-divider length="100%" color="black"></v-divider>

            <v-card-text class="d-flex justify-space-between">
              <span>TOTAL: </span>
              <span class="font-weight-bold" style="font-size: 16px">
                ${{ calcTotalPrice }}
              </span>
            </v-card-text>

            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>

            <v-cart-actions class="px-0 mt-5 d-flex flex-column" v-gap="'15px'">
              <v-btn
                class="Check-Out text-white mx-0 font-weight-bold w-100 text-none"
                variant="elevated"
                elevation="0"
                density="compact"
                height="45"
                color="rgb(27 60 247)"
                @click="toCheckout"
              >
                Proceed To Checkout
              </v-btn>

              <v-btn
                class="Check-Out mx-0 font-weight-bold w-100 text-none"
                variant="outlined"
                elevation="0"
                density="compact"
                height="45"
                color="rgb(27 60 247)"
                @click="$router.push({ name: 'home' })"
              >
                continue shopping
              </v-btn>
            </v-cart-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";

export default {
  data: () => ({
    countries: [
      "Egypt",
      "United States",
      "Canada",
      "Germany",
      "Australia",
      "Japan",
      "Brazil",
      "India",
      "United Kingdom",
      "France",
      "South Africa",
    ],
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartItems",
      "deleteItem",
      "setToLocalStorage",
    ]),
    toCheckout() {
      this.setToLocalStorage();
      this.$router.push({ name: "CheckOut" });
    },
  },
};
</script>

<style scoped lang="scss">
select,
.states input {
  border: 1px solid #d0d0d0;
  font-size: 14px;
}
.states select {
  width: 55%;
  margin-right: 1%;
}
.states input {
  width: 43%;
  margin-left: 1%;
}
.v-card-title {
  font-size: 35px;
  font-weight: bold;
}
.Order-Summary {
  font-size: 18px;
  font-weight: bold;
  height: 52px;

  display: flex;
  align-items: center;
}
img.cart-page-cards {
  max-width: 75%;
}
::v-deep .v-table__wrapper {
  overflow: hidden;
}
.v-breadcrumbs {
  font-size: 14px;
}
.breadcrumbs ul {
  padding: 0;
}

th {
  font-size: 14px;
  font-weight: 700 !important;
  color: #656565;
}

.Your-Cart {
  font-size: 30px;
  font-weight: bold;
  color: #141414;
}
.item-title {
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.counter {
  border-radius: 30px;
  border: 1px solid #a8a8a8;
  width: fit-content;
}
.counter input {
  border: none;
  outline: none;
  width: 35px;
  font-size: 12px;
  color: #909090;
}
.price {
  color: black;
  font-size: 14px;
}
</style>
