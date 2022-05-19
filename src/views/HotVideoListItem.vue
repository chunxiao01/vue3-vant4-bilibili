<template>
  123
  <!-- <div
    class="videocard"
    @click="
      clickVideoPlayLink(
        videoinfo.aid,
        videoinfo.bvid,
        videoinfo.cid,
        videoinfo.short_link
      )
    "
  >
    <div class="videocard-container">
      <a class="videocard-img">
        <div class="videocard-img-container">
          <img
            v-lazy="videoinfo.pic + '@412w_232h_1c.webp'"
            alt=""
            class="videocard-img__img"
          />
        </div>
        <div class="videocard-time">
          <span class="videocard-time-text">{{
            playSecondsFormat(videoinfo.duration)
          }}</span>
        </div>
      </a>
      <div class="videocard-content">
        <div class="videocard-title">
          <span class="videocard-title-text">{{ videoinfo.title }}</span>
        </div>
        <div
          class="videocard-tag"
          v-if="isShowPlayTag(videoinfo.rcmd_reason.content)"
        >
          <span class="videocard-tag-text">{{
            videoinfo.rcmd_reason.content
          }}</span>
        </div>
        <div class="videocard-up">
          <span class="videocard-up-icon"></span>
          <span class="videocard-up-name">{{ videoinfo.owner.name }}</span>
        </div>
        <div class="videocard-play-info">
          <div class="videocard-play-info-detail videocard-play-counter">
            <div class="videocard-play-icon__img">
              <img src="~assets/img/home/hot/play.svg" alt="" />
            </div>
            <span class="videocard-play-counter-text">{{
              playCounterFormat(videoinfo.stat.view)
            }}</span>
          </div>
          <div class="videocard-play-info-detail videocard-play-date">
            <span class="videocard-play-date-text">{{
              playDateFormat(videoinfo.ctime)
            }}</span>
          </div>
          <div class="videocard-play-info-detail videocard-play-share">
            <div class="videocard-share-icon__img">
              <img src="~assets/img/home/hot/share.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
// import { numbersFormat, dateFormat, secondsFormat } from "@/common/utils";

// export default {
//   props: {
//     videoinfo: {
//       type: Object,
//       default() {
//         return {};
//       }
//     }
//   },
//   methods: {
//     //数字格式化
//     playCounterFormat(num: number) {
//       return numbersFormat(num);
//     },

//     //日期格式化
//     playDateFormat(date: string) {
//       return dateFormat(date);
//     },

//     //秒时间格式化
//     playSecondsFormat(second: number) {
//       return secondsFormat(second);
//     },

//     //是否显示视频tag
//     isShowPlayTag(tag: boolean) {
//       return tag;
//     },

//     //监听图片加载完成事件
//     //imgload() {},

//     //监听图片点击事件
//     clickVideoPlayLink(aid, bvid, cid, bvurl) {
//       this.recordVideoView();
//       this.$router.push({
//         path: "/videodetail",
//         query: {
//           aid,
//           bvid,
//           cid,
//           bvurl
//         }
//       });
//     },

//     //添加视频观看记录，以点击视频图片跳转至视频详情为标准
//     recordVideoView() {
//       const { aid, bvid, cid, short_link, pic, title } = this.videoinfo;
//       const name = this.videoinfo.owner.name;
//       const ctime = this.playDateFormat(this.videoinfo.ctime);
//       const payload = {
//         aid,
//         bvid,
//         cid,
//         short_link,
//         pic,
//         title,
//         name,
//         ctime
//       };
//       this.$store.dispatch("addHistoryView", payload);
//     }
//   }
// };
</script>

<style>
.videocard {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  background-color: #fafafa;
  border-bottom: 1px solid #cfcfcf;
}
.videocard:not(:first-child) {
  margin-top: 8px;
}
.videocard-container {
  display: flex;
}
.videocard-img {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 178px;
  height: 100px;
  margin-right: 8px;
}
.videocard-content {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-width: 0;
  min-height: 100px;
}
.videocard-img-container {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.videocard-img__error,
.videocard-img__img,
.videocard-img__loading {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.videocard-time {
  display: inline-block;
  position: absolute;
  padding: 1px;
  bottom: 3px;
  right: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: #eee;
  font-size: 14px;
  border-radius: 5px;
}

.videocard-title {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 32px;
  font-weight: 500;
  line-height: 16px;
  font-size: 15px;
  word-wrap: break-word;
}
.videocard-tag-text {
  border: 1px solid #ea6da3;
  color: #ea6da3;
  font-size: 12px;
  border-radius: 2px;
}
.videocard-tag-text::before {
  content: "";
  pointer-events: none;
}
.videocard-up-icon {
  position: relative;
  display: inline-block;
  border: 1px solid #999;
  color: #999;
  font-size: 14px;
  border-radius: 2px;
  margin-right: 1px;
}
.videocard-up-icon::before {
  content: "up";
  pointer-events: none;
}
.videocard-up-name {
  font-size: 14px;
  color: #999;
}
.videocard-play-info {
  display: flex;
}
.videocard-play-date {
  width: 55px;
}
.videocard-play-share {
  width: 40px;
}
.videocard-play-counter {
  flex: 1;
}
.videocard-play-icon__img,
.videocard-share-icon__img {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 3px;
  vertical-align: middle;
}
.videocard-play-counter-text,
.videocard-play-date-text {
  font-size: 14px;
  color: #666;
}
.videocard-play-date {
  text-align: center;
}
.videocard-play-share {
  text-align: right;
}
</style>
