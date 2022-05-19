import { myRequestInstance } from "../index";

import type {
  IHotVideoListRequest,
  IHotVideoRecommendRequest
} from "./homeTypes";

enum eHomeApi {
  HotVideoList = "/popular",
  HotViewDetail = "/view/detail"
}

/**
 * 获取首页-热门-视频列表
 */
import axios from "axios";
const hotvideoListRequest = (params: IHotVideoListRequest) => {
  return myRequestInstance.get({
    url: eHomeApi.HotVideoList,
    params: params
  });
};

/*
获取视频数据--视频详情和视频相关推荐
*/
const hotvideoRecommendRequest = (params: IHotVideoRecommendRequest) => {
  return myRequestInstance.get({
    url: eHomeApi.HotViewDetail,
    params: params
  });
};

export { hotvideoListRequest, hotvideoRecommendRequest };
