<template>
  <app-layoute>
    <router-view />
  </app-layoute>
</template>

<script>
import AppLayoute from "@/components/global/AppLayoute";
export default {
  components: { AppLayoute },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.pointer {
  cursor: pointer;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
}
</style>
