<template>
  <div class="layout">
    <v-layout>
      <v-navigation-drawer v-model="drawer" temporary app location="right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          deserunt adipisci enim veritatis illum natus tempore totam molestiae
          et, laboriosam temporibus aut vitae vel maiores asperiores mollitia,
          dolore voluptatibus. Quam.
        </p>
      </v-navigation-drawer>
      <v-main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis qui
          porro dolor dolorem magni illum enim ullam, possimus excepturi, vitae
          suscipit molestiae unde, quod sit minima in perspiciatis! Nulla,
          corrupti?
        </p>
      </v-main>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-footer :app="true">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          odit eligendi dolor nemo aut modi, exercitationem dolore quos ipsa
          dicta alias cupiditate nulla error architecto quasi totam, atque odio
          nisi.
        </p>
      </v-footer>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    drawer: true,
  }),
};
</script>
