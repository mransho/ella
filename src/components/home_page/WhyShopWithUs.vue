<template>
  <div class="shopWithUs">
    <div class="blurred-background"></div>
    <div class="cont">
      <div
        class="title"
        style="
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <h2 class="text-center"><span>Why Shop</span> With Us?</h2>
      </div>
      <v-container fluid>
        <v-row class="parent">
          <v-col cols="12" lg="3">
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

          <v-col cols="12" lg="3">
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
          <v-col cols="12" lg="3">
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
          <v-col cols="12" lg="3">
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
  position: relative;

  h2 {
    color: white;
    font-weight: 900;
    font-size: 30px;
    span {
      color: #10ffda;
    }
  }
  .cont {
    position: relative;
    z-index: 2;
  }
}
.blurred-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #3a3a3a6e;
}

.v-card-title {
  white-space: pre-wrap;
  line-height: 1.2;
  font-weight: 700;
}
@media (max-width: 1279px) {
  .parent {
    gap: 13px;
  }
}
.parent {
  overflow: scroll;
  max-height: 301px;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    width: 0px;
  }
}
</style>
