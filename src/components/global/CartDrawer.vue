<template>
  <div class="drawer">
    <v-navigation-drawer
      width="370"
      v-model="drawer"
      app
      location="right"
      class="pr-1"
    >
      <v-card class="px-0 shoppingCartHeader mt-5" elevation="0">
        <v-card-title class="px-0"> shopping Cart </v-card-title>

        <v-card-text class="px-0 itemNum">
          {{ cartItems.length }} Items
        </v-card-text>

        <v-card-text class="px-0" v-if="!cartItems.length">
          Free shipping for all orders over $800.00
        </v-card-text>

        <v-card-text class="px-0 text-center" v-if="!cartItems.length">
          your cart is empty
        </v-card-text>
        <div class="bar-parent mt-4 position-relative" v-if="cartItems.length">
          <svg
            class="icon-shipping-truck"
            fill="#F44336"
            width="30"
            viewBox="0 0 40.55 24"
            :style="`
                  left: calc(${
                    parseInt((calcTotalPrice / 1000) * 100) <= 100
                      ? parseInt((calcTotalPrice / 1000) * 100)
                      : 100
                  }% - 30px); 
                  position: absolute;
                  bottom: 50%;
                  z-index: 1;
                  transition: 0.2s all ease-in-out; `"
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
            color="red"
            height="10"
            striped
            style="transition: 0.2s all ease-in-out"
            :model-value="
              parseInt((calcTotalPrice / 1000) * 100) <= 100
                ? parseInt((calcTotalPrice / 1000) * 100)
                : 100
            "
          >
          </v-progress-linear>
        </div>

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

        <v-card-actions v-if="!cartItems.length">
          <v-btn
            class="text-none continue-shopping w-100 rounded-xl"
            height="45"
            variant="outlined"
            density="compact"
          >
            continue shopping
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="pa-0 cartItems" elevation="0" v-if="cartItems.length">
        <v-container class="px-1">
          <v-row
            v-for="(item, i) in cartItems"
            :key="item.id"
            class="align-center"
          >
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
              <v-card-text class="px-0 pt-2 price">
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quantity
                }}
              </v-card-text>
              <div
                class="item-footer d-flex justify-space-between align-center"
              >
                <div class="counter px-1">
                  <v-icon
                    size="17"
                    color="#909090"
                    @click="item.quantity > 1 ? item.quantity-- : false"
                  >
                    mdi-minus
                  </v-icon>
                  <input
                    type="number"
                    min="1"
                    v-model="item.quantity"
                    name=""
                    id=""
                    class="text-center py-3"
                  />
                  <v-icon size="17" color="#909090" @click="item.quantity++">
                    mdi-plus
                  </v-icon>
                </div>
                <v-icon size="20" class="mr-2" @click="deleteItem(item.id)">
                  mdi-close
                </v-icon>
              </div>
            </v-col>
            <hr class="w-75 mt-2 mx-auto" v-if="i !== cartItems.length - 1" />
          </v-row>
        </v-container>
      </v-card>

      <v-card
        class="pa-0 mb-5 mt-5 card-actions"
        v-if="cartItems.length"
        elevation="0"
      >
        <v-card-actions
          class="flex-column justify-center align-center"
          v-gap="'10px'"
        >
          <v-btn
            class="Check-Out bg-blue w-100 rounded-xl text-none"
            variant="elevated"
            elevation="0"
            density="compact"
            height="45"
          >
            Check Out
          </v-btn>
          <v-btn
            class="View-Cart w-100 rounded-xl text-none"
            variant="outlined"
            density="compact"
            height="45"
          >
            View Cart
          </v-btn>
        </v-card-actions>
        {{ calcTotalPrice }}
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  name: "cartDrawer",
  inject: ["Emitter"],
  data: () => ({
    drawer: true,
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
    ...mapActions(cartStore, ["getCartItems", "deleteItem"]),
  },

  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
    this.getCartItems();
  },
};
</script>
<style scoped lang="scss">
::v-deep .cartItems {
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
.v-card-title {
  font-size: 17px;
  font-weight: bold;
  color: #9a9a9a;
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
.itemNum,
.v-card-text {
  color: #9a9a9a;
}
.continue-shopping {
  border-color: #c7c7c7;
}
.icon-shipping-truck {
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
  font-weight: bold;
  font-size: 14px;
}
.Check-Out,
.View-Cart {
  font-weight: bold;
}
.View-Cart {
  border-color: #c6c6c6;
}
.cartItems {
  overflow-y: auto;
  max-height: calc(100vh - 319px);
  margin-top: 139px;
}
.shoppingCartHeader {
  position: fixed;
  top: 0;
  width: 85%;
  left: 50%;
  transform: translateX(-50%);
}
.card-actions {
  position: fixed;
  bottom: 0;
  width: 85%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
