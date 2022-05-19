<template>
  <Search
    ref="search"
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { Search } from "vant";

const search = ref(null); //当前搜索组件实例
onMounted(() => {
  (search.value as any).focus(); //当前搜索输入框获取焦点
});

const value = ref("");
const onSearch = (val: any) => console.log(val);
const onCancel = () => history.back();
</script>

<style scoped></style>
