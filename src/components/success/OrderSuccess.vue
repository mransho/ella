<template>
  <div class="orderSuccess">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center align-center py-8">
        <div class="text-center text-white" style="">
          <v-icon
            color="green"
            class="rounded-circle"
            size="75"
            style="
              width: 100px;
              height: 100px;
              font-size: 76px;
              border: 1px solid green;
            "
          >
            mdi-check
          </v-icon>
        </div>
        <v-card-title
          style="font-size: 30px; font-weight: bold; color: rgb(71 70 70)"
        >
          Order Placed Successfuly!
        </v-card-title>
        <v-card-text style="color: #6f6f6f">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tempora perspiciatis libero. Soluta corporis porro minus placeat,
          aperiam voluptas earum tempora voluptatem dicta est. Amet quae fuga
          soluta! Tenetur, maiores.
        </v-card-text>
        <v-card-actions>
          <v-btn variant="elevated" color="blue" @click="resetData">
            Got it !
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        this.$emit("close_popup");
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
