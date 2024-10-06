<template>
  <div class="shopWithUs py-14">
    <div class="title">
      <h2 class="text-center mp-5"><span>Why Shop</span> With Us?</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="../../assets/images/free-shipping.png" alt="" />
              </div>
              <v-card-title> free shipping on first order </v-card-title>
              <v-card-text class="pb-0" style="font-size: 16px">
                praesent suscipit mattis facilisis
              </v-card-text>
              <a
                href="#"
                class="text-white"
                style="font-weight: 700; font-size: 14px"
                >Learn More</a
              >
            </v-card>
          </v-col>

          <v-col cols="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="../../assets/images/weekly-flash-sales.png" alt="" />
              </div>
              <v-card-title> weekly flash sale</v-card-title>
              <v-card-text class="pb-0" style="font-size: 16px">
                praesent suscipit mattis facilisis
              </v-card-text>
              <a
                href="#"
                class="text-white"
                style="font-weight: 700; font-size: 14px"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="../../assets/images/discount.png" alt="" />
              </div>
              <v-card-title> anual payment discount </v-card-title>
              <v-card-text class="pb-0" style="font-size: 16px">
                praesent suscipit mattis facilisis
              </v-card-text>
              <a
                href="#"
                class="text-white"
                style="font-weight: 700; font-size: 14px"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="../../assets/images/cash-back.png" alt="" />
              </div>
              <v-card-title> cashback reward program </v-card-title>
              <v-card-text class="pb-0" style="font-size: 16px">
                praesent suscipit mattis facilisis
              </v-card-text>
              <a
                href="#"
                class="text-white"
                style="font-weight: 700; font-size: 14px"
                >Learn More</a
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style scoped lang="scss">
.shopWithUs {
  background-image: url("../../assets/images/why-shop-with-us-banner.webp");
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    font-weight: 900;
    font-size: 30px;
    span {
      color: #10ffda;
    }
  }
}
.v-card-title {
  white-space: pre-wrap;
  line-height: 1.2;
  font-weight: 700;
}
</style>
