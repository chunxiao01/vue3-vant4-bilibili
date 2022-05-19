<template>
  <Tabbar
    v-if="appProps.isShowTabbar"
    v-model="active"
    active-color="#ff509b"
    class="tabbar_container"
  >
    <TabbarItem replace to="/home">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? icons[0].active : icons[0].inactive" />
      </template>
    </TabbarItem>
    <TabbarItem replace to="/category">
      <span>分区</span>
      <template #icon="props">
        <img :src="props.active ? icons[1].active : icons[1].inactive" />
      </template>
    </TabbarItem>
    <TabbarItem replace to="/profile">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icons[2].active : icons[2].inactive" />
      </template>
    </TabbarItem>
  </Tabbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabbar, TabbarItem } from "vant";
const active = ref(0); //默认第一个标签被选中
//各标签的图标，注意需要使用require(url)的方式引用
const icons = [
  {
    active: require("@/assets/img/tabbar/0_0.svg"),
    inactive: require("@/assets/img/tabbar/0_1.svg")
  },
  {
    active: require("@/assets/img/tabbar/1_0.svg"),
    inactive: require("@/assets/img/tabbar/1_1.svg")
  },
  {
    active: require("@/assets/img/tabbar/2_0.svg"),
    inactive: require("@/assets/img/tabbar/2_1.svg")
  }
];

//通过父组件App判断是否需要展示标签栏
const appProps = defineProps({
  isShowTabbar: Boolean
});
</script>

<style scoped lang="less">
.tabbar_container {
  img {
    width: 24px;
    height: 24px;
  }
  span {
    font-size: 18px;
  }
}
</style>
