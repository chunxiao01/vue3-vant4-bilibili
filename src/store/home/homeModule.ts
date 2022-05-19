import { Module } from "vuex";

import type { IrootState } from "../types";
import type { IHomeState } from "./homeModuleTypes";

import type { IHotVideoListRequest } from "@/service/home/homeTypes";

import { hotvideoListRequest } from "@/service/home/hot_video_request";

const HomeModule: Module<IHomeState, IrootState> = {
  namespaced: true, //开启命名空间
  state() {
    return {
      hotvideoList: []
    };
  },
  getters: {},
  mutations: {},
  actions: {
    async hotvideoListAction(context, payload: IHotVideoListRequest) {
      const result = await hotvideoListRequest(payload);
      console.log(result);
    }
  }
};

export { HomeModule };
