import { defineStore } from "pinia";
import axios from "axios";
export const productsModule = defineStore("productsModule", {
  state: () => ({
    FlashDeals: [],
    newProducts: [],
    mobilePhones: [],
    fragrances: [],
    furniture: [],
  }),
  actions: {
    getProducts() {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.FlashDeals = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
    getlaptop() {
      axios
        .get("https://dummyjson.com/products/search?q=laptop")
        .then((res) => {
          this.newProducts = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
    getPhones() {
      axios
        .get("https://dummyjson.com/products/category/smartphones")
        .then((res) => {
          this.mobilePhones = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
    getFragrances() {
      axios
        .get("https://dummyjson.com/products/category/fragrances")
        .then((res) => {
          this.fragrances = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
    getFurniture() {
      axios
        .get("https://dummyjson.com/products/category/furniture")
        .then((res) => {
          this.furniture = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
  },
});
