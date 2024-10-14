<template>
  <div class="QuickView">
    <v-dialog v-model="dialog">
      <h1>this is popup</h1>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return { dialog: true };
  },
};
</script>
