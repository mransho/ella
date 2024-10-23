<template>
  <div class="top-offers bg-grey-lighten-4 py-9">
    <v-container max-width="1500">
      <v-row class="d-flex">
        <v-col cols="12" sm="4" md="4" lg="4">
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
        <v-col cols="12" sm="4" md="4" lg="4">
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
        <v-col cols="12" sm="4">
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

      <v-row class="mt-5 Second-row">
        <v-col class="pr-5 mt-3">
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

        <v-col class="pl-5 mt-3">
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
<style scoped lang="scss">
.parent {
  overflow: hidden;
  cursor: pointer;
}
@media (max-width: 599px) {
  .Second-row {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
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
  .Second-row .v-col {
    min-width: 350px;
  }
}
</style>
