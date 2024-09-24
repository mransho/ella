<template>
  <div class="banner">
    <div class="parent d-flex align-center">
      <v-container>
        <v-col cols="6">
          <v-row>
            <div class="cont">
              <h3><span>Huge saving</span> on UHD televisions</h3>
              <p class="hint">sale up to 70% off on selected items*</p>
              <v-btn
                variant="outlined"
                size="x-large"
                class="py-4 px-15 rounded-xl text-capitalize"
              >
                shop now
              </v-btn>
            </div>
          </v-row>
        </v-col>
      </v-container>
    </div>
  </div>
</template>
<style lang="scss">
.banner {
  .parent {
    height: 500px;
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: 0px top;
    .cont {
      color: white;
      width: 402px;
      h3 {
        font-weight: 900;
        font-size: 45px;
        span {
          color: #10ffda;
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
</style>
