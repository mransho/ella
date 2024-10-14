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
                type="number"
                min="1"
                v-model="quantity"
                name=""
                id=""
                class="text-center py-3"
              />
              <v-icon size="20" @click="quantity++"> mdi-plus </v-icon>
            </div>
            <v-card-actions class="mt-7 w-100 px-0">
              <v-btn
                variant="outlined"
                height="50"
                class="w-75 rounded-xl bg-black"
                density="compact"
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
export default {
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
  },
  computed: {
    ...mapState(productsModule, ["SingleProduct"]),
  },
  data: () => ({
    loading: true,
    tab: "",
    quantity: 1,
    product: {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
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
