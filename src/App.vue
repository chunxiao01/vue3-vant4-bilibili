<template>
  <nav-bar :navBarBackIcon="isNarBarShowBackIcon" />
  <router-view :key="$route.fullPath" />
  <tab-bar :isShowTabbar="isShowTabBar" />
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useRoute } from "vue-router";

import NavBar from "@/components/content/NavBar.vue"; //顶部导航栏
import TabBar from "@/components/content/TabBar.vue"; //底部标签栏

const $route = useRoute(); //当前路由

//顶部导航栏是否显示返回图片，默认不显示，在搜索模块显示
const isNarBarShowBackIcon = computed(() => $route.fullPath === "/search");

//底部标签栏是否展示，默认展示， 在搜索模块不展示
const isShowTabBar = computed(() => $route.fullPath !== "/search");
</script>

<style lang="less"></style>
