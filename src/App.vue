<template>
  <h2>{{ msg }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      msg: "Hello"
    };
  }
});
</script>

<style lang="less"></style>
