<template>
  <div class="top_cat">
    <div class="cyber-banner">
      <img src="@/assets/images/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <div class="categories pt-13">
      <div class="title d-flex justify-center align-center mb-5">
        <h3 class="text-center flex-grow-1">Top Category</h3>
        <a class="text-black mr-10" href="#">Shop All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col
            cols="2"
            class="justify-center"
            v-for="cat in categories"
            :key="cat.title"
          >
            <v-card
              elevation="0"
              class="px-3 py-2 text-senter d-flex flex-column align-center"
            >
              <v-hover v-slot="{ isHovering, props }">
                <div class="img-parent d-flex align-center">
                  <img
                    :src="cat.img"
                    alt=""
                    class="cursor-pointer"
                    v-bind="props"
                    :style="`scale:${isHovering ? 1.05 : 1}`"
                  />
                </div>
              </v-hover>
              <v-card-text>{{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobile Phones",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Laptops & Tablets",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "Televisions",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "PCs & Accessories",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Audio & Video",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "Gaming Accessories",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Home Appliances",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "Kitchen Appliances",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "Cameras",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "Consumables",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "Smart Homes",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "Accessories",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>
<style scoped>
.title h3 {
  font-weight: 900;
  font-style: 20px;
}
.img-parent {
  overflow: hidden;
  border-radius: 50%;
}
img {
  transition: 0.4s all ease-in-out;
}
</style>
