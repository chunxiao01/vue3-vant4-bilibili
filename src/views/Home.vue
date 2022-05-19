<template>
  <Search @click="onClick" />
  <Tabs
    v-model:active="active"
    @click-tab="onClickTab"
    animated
    color="#ff509b"
    title-active-color="#ff509b"
    class="tab_contanier"
  >
    <Tab class="tab_contanier_item" title="hot">
      <template #title>热门</template>
      <hot-video-list />
    </Tab>
    <Tab class="tab_contanier_item" title="cartoon">
      <template #title>追番</template>
      追番
    </Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { Search, Tab, Tabs } from "vant";

import { useStore } from "vuex";

import HotVideoList from "./HotVideoList.vue";

//获取路由
const $router = useRouter();
const onClick = () => {
  //点击搜索框跳转到搜索界面
  $router.push("/search");
};

//顶部菜单栏切换事件
const active = ref(0);
const store = useStore();
const onClickTab = (e: any) => {
  if (e.title === "hot") {
    //获取网络请求
    store.dispatch("HomeModule/hotvideoListAction", {
      ps: 20,
      pn: 1
    });
  }
};
</script>

<style>
.tab_contanier .van-tab__text--ellipsis {
  font-size: 18px;
}
</style>
