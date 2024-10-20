import { defineStore } from "pinia";
import axios from "axios";
export const productsModule = defineStore("productsModule", {
  state: () => ({
    FlashDeals: [],
    newProducts: [],
    mobilePhones: [],
    fragrances: [],
    furniture: [],
    categoryProducts: [],
    SingleProduct: [],
    categories: [
      {
        title: "Smartphones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Tablets",
        route: "tablets",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Men's Watches",
        route: "mens-watches",
      },
      {
        title: "Home Decoration",
        route: "home-decoration",
      },
      {
        title: "Kitchen Accessories",
        route: "kitchen-accessories",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
    ],
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
    getProductsByCategory(category) {
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          this.categoryProducts = res.data;
        })
        .catch((err) => console.log(err));
    },
    getSingleProduct(ProductId) {
      this.SingleProduct = [];
      axios
        .get(`https://dummyjson.com/products/${ProductId}`)
        .then((res) => {
          this.SingleProduct = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
});
