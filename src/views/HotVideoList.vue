<template>
  <!-- <div>
    <hot-video-list-item
      v-for="(videoinfo, index) in props.videolist"
      :key="index"
      :videoinfo="videoinfo"
    />
  </div> -->
  <hot-video-list-item />
</template>

<script setup lang="ts">
import HotVideoListItem from "./HotVideoListItem.vue";
// const props = defineProps({
//   videolist: {
//     type: Array,
//     default() {
//       return [];
//     }
//   }
// });
</script>

<style></style>
