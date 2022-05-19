<template>
  <NavBar>
    <template #left v-if="!props.navBarBackIcon">
      <span class="navbar_title">哔哩哔哩</span>
    </template>
    <template #left v-else>
      <div @click="onClick">
        <Icon
          name="arrow-left"
          size="20"
          color="#000"
          class="navbar_arrow_left"
        />
        <span class="navbar_title">哔哩哔哩</span>
      </div>
    </template>
  </NavBar>
</template>

<script setup lang="ts">
import { NavBar, Icon } from "vant";

const props = defineProps({
  navBarBackIcon: Boolean
});

const onClick = () => {
  history.back();
};
</script>

<style scoped>
.navbar_arrow_left {
  font-weight: bold;
  margin-right: 10px;
  -webkit-tap-highlight-color: transparent;
}
.navbar_title {
  font-size: 20px;
  font-weight: bold;
  -webkit-tap-highlight-color: transparent;
}
</style>
