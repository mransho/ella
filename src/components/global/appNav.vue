<template>
  <div class="nav-bar">
    <v-app-bar
      color="rgb(22 24 128)"
      class="pt-3"
      height="fit-content"
      absolute
    >
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <img src="../../assets/images/logo.png" alt="" />
          </v-col>
          <v-col cols="5">
            <div class="position-relative" v-width="'90%'">
              <input
                type="search"
                name="navSearch"
                id="navSearch"
                placeholder="Searsh the store"
                class="py-3 px-5 bg-white w-100 rounded-xl"
              />
              <svg
                class="svg-search"
                data-icon="search"
                viewBox="0 0 512 512"
                width="100%"
                height="100%"
              >
                <path
                  d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
                ></path>
              </svg>
            </div>
          </v-col>
          <v-col cols="4" class="ps-8">
            <div
              class="parent text-white d-flex justify-space-between align-center"
            >
              <div class="available">
                <span class="mt-2">Available 45/5 at</span>
                <br />
                <strong>(059) 156-4565</strong>
              </div>
              <div class="wishlists d-flex flex-column align-center">
                <svg viewBox="0 0 512 512" class="icon icon-wishlist">
                  <g>
                    <g>
                      <path
                        d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25
                            c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25
                            c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7
                            c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574
                            c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431
                            c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351
                            C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646
                            c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245
                            C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659
                            c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66
                            c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351
                            C482,254.358,413.255,312.939,309.193,401.614z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="mt-2">Wish Lists</span>
              </div>
              <div class="wishlists d-flex flex-column align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="icon icon-account"
                  viewBox="0 0 1024 1024"
                  width="100%"
                  height="100%"
                >
                  <title>user</title>
                  <path
                    class="path1"
                    d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"
                  ></path>
                  <path
                    class="path2"
                    d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"
                  ></path>
                </svg>
                <span class="mt-2">Sign in</span>
              </div>
              <div
                @click="openCart"
                class="wishlists d-flex flex-column align-center"
              >
                <v-badge
                  location="rigte top"
                  content="2"
                  color="#4eb0fd"
                  offsetX="-14"
                ></v-badge>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path
                    class="path1"
                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path2"
                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path3"
                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
                  ></path>
                </svg>
                <span class="mt-2">Cart</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-6 justify-space-between">
          <v-col cols="8">
            <ul class="links d-flex text-white justify-space-between">
              <li>Smart Phones</li>
              <li>Laptops</li>
              <li>Fragrances</li>
              <li>Men's Watches</li>
              <li>Lighting</li>
              <li>Furniture</li>
              <li>Women's Jewellery</li>
            </ul>
          </v-col>
          <v-col cols="3" v-gap="'35px'" class="d-flex justify-end">
            <div
              v-gap="'5px'"
              class="help pointer d-flex align-center text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-headset"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-user-headset fa-w-14 fa-3x"
              >
                <path
                  d="M320 352h-23.1a174.08 174.08 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM48 224a16 16 0 0 0 16-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 0 1-80 80h-32a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h96a112.14 112.14 0 0 0 112-112v-16C416 86.13 329.87 0 224 0S32 86.13 32 192v16a16 16 0 0 0 16 16zm160 0h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64z"
                  class=""
                ></path>
              </svg>
              <span>Help</span>
            </div>
            <div
              v-gap="'9px'"
              class="pointer d-flex align-center text-white"
              id="lang"
            >
              <img
                :src="selectedLang[0].icon"
                alt="Language icon"
                width="20px"
              />
              {{ selectedLang[0].lang }} / {{ selectedLang[0].currency }}
              <v-icon>mdi-chevron-down</v-icon>

              <v-menu activator="#lang" offset-y>
                <v-list v-model:selected="selectedLang">
                  <v-list-item
                    v-for="lang in langs"
                    :key="lang.lang"
                    :value="lang"
                  >
                    <v-list-item-title
                      v-gap="'10px'"
                      class="pointer d-flex align-center"
                    >
                      <img :src="lang.icon" alt="Language icon" width="20px" />
                      {{ lang.lang }} / {{ lang.currency }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "appNav",
  inject: ["Emitter"],
  data: () => ({
    selectedLang: [
      {
        icon: require("@/assets/SVGS/en-lang.svg"),
        lang: "EN",
        currency: "USD",
      },
    ],
    langs: [
      {
        icon: require("@/assets/SVGS/en-lang.svg"),
        lang: "EN",
        currency: "USD",
      },
      {
        icon: require("@/assets/SVGS/de-lang.svg"),
        lang: "DE",
        currency: "EURO",
      },
    ],
  }),
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
<style scoped>
#navSearch {
  outline: none;
}
.wishlists,
.pointer {
  cursor: pointer;
}
.wishlists span {
  color: orange;
}

svg {
  width: 20px;
  fill: orange;
}
.links {
  list-style: none;
}
.help svg {
  fill: #cfcfff;
}
.svg-search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
}
</style>
