/**
 * 获取首页-热门-视频列表
 * ps:每页视频数量
 * pn:页数
 */
export interface IHotVideoListRequest {
  ps: number;
  pn: number;
}

/*
获取视频数据--视频详情和视频相关推荐
aid:视频ID,
bvid:视频ID,
recommend_type:视频类型,
need_rcmd_reason:视频分类
*/
export interface IHotVideoRecommendRequest {
  aid: string;
  bvid: string;
  recommend_type: any;
  need_rcmd_reason: number;
}
