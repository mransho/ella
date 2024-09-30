import { defineStore } from "pinia";
import axios from "axios";
export const productsModule = defineStore("productsModule", {
  state: () => ({
    FlashDeals: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => (this.FlashDeals = res.data.products.slice(0, 8)))
        .catch((err) => console.log(err));
    },
  },
});
