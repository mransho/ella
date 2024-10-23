<template>
  <div class="banner">
    <div class="parent d-flex align-center">
      <img src="@/assets/images/banner-bg.jpg" alt="" />
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
    </div>
  </div>
</template>
<style scoped lang="scss">
.banner {
  .parent {
    height: 500px;
    background-size: cover;
    position: relative;
    background-position: 0px top;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cont {
      position: absolute;
      left: 51px;
      top: 51px;
      color: white;
      width: 600px;
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
// Media Queries
@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        width: 600px;
        padding-left: 20px;
        padding-top: 20px;
        left: 50px;
        h3 {
          font-size: 35px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 20px;
        padding-top: 10px;
        width: 400px;
        left: 10px;
        top: 20px;
        h3 {
          font-size: 30px;
        }
        .hint {
          font-size: 15px;
        }
        button {
          height: 40px !important;
          font-size: 15px !important;
          width: 117px;
          padding: 3px 5px !important;
        }
      }
    }
  }
}
@media (max-width: 580px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 0px;
        padding-top: 0px;
        width: 80%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        h3 {
          font-size: 24px;
          width: 301px;
        }
        .hint {
          font-size: 12px;
        }
        button {
          height: 39px !important;
          font-size: 13px !important;
          width: 117px;
          padding: 3px 5px !important;
        }
      }
    }
  }
}
</style>
