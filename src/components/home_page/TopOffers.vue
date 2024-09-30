<template>
  <div class="top-offers bg-grey-lighten-4 py-9">
    <v-container fluid>
      <v-row class="d-flex">
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent rounded-lg h-100" v-bind="props">
              <img
                :style="`scale:${
                  isHovering ? 1.1 : 1
                };transition: 0.5s all ease-in-out`"
                class="w-100 h-100 rounded-lg cursor-pointer"
                src="../../assets/images/playstations.webp"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent rounded-lg h-100" v-bind="props">
              <img
                :style="`scale:${
                  isHovering ? 1.1 : 1
                };transition: 0.5s all ease-in-out`"
                class="w-100 h-100 rounded-lg cursor-pointer"
                src="../../assets/images/headset.webp"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent rounded-lg h-100" v-bind="props">
              <img
                :style="`scale:${
                  isHovering ? 1.1 : 1
                };transition: 0.5s all ease-in-out`"
                class="w-100 h-100 rounded-lg cursor-pointer"
                src="../../assets/images/chairs.webp"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col cols="6" class="pr-5 mt-3">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent rounded-lg h-100" v-bind="props">
              <img
                :style="`scale:${
                  isHovering ? 1.1 : 1
                };transition: 0.5s all ease-in-out`"
                class="w-100 h-100 rounded-lg cursor-pointer"
                src="../../assets/images/iphones.webp"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>

        <v-col cols="6" class="pr-5 mt-3">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent rounded-lg h-100" v-bind="props">
              <img
                :style="`scale:${
                  isHovering ? 1.1 : 1
                };transition: 0.5s all ease-in-out`"
                class="w-100 h-100 rounded-lg cursor-pointer"
                src="../../assets/images/laptops.webp"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.parent {
  overflow: hidden;
  cursor: pointer;
}
</style>
