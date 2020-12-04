<template>
  <div class="pageIndex">
    <heade></heade>
    <swipe></swipe>
    <div>
      <van-notice-bar
        left-icon="volume-o"
        text="重磅通知！！！视频号教程即将在2020年12月20隆重上线，还等什么快来商城预订吧~~~"
      />
    </div>


    <div class="redm">
      <div class="reds"><van-icon name="fire-o" color="#D93F30"/><span class="redtitle">热门视频</span></div>
    </div>
    <div class="video-box">
      <div class="video-list">
        <div class="video-lista">
          <img src="@/assets/images/video_list.png" alt="">
          <div class="video-list-title">新一代微服务全家桶AlibabaCloud+SpringCloud实战</div>
          <div class="video-list-titlea"><div>级别: 高级</div><div class="price">￥ 69</div></div>
        </div>
        <div class="video-lista video-listb">
          <img src="@/assets/images/video_list.png" alt="">
          <div class="video-list-title">新一代微服务全家桶AlibabaCloud+SpringCloud实战</div>
          <div class="video-list-titlea"><div>级别: 高级</div><div class="price">￥ 69</div></div>
        </div>
      </div>
       <div class="video-list">
        <div class="video-lista">
          <img src="@/assets/images/video_list.png" alt="">
          <div class="video-list-title">新一代微服务全家桶AlibabaCloud+SpringCloud实战</div>
          <div class="video-list-titlea"><div>级别: 高级</div><div class="price">￥ 69</div></div>
        </div>
        <div class="video-lista video-listb">
          <img src="@/assets/images/video_list.png" alt="">
          <div class="video-list-title">新一代微服务全家桶AlibabaCloud+SpringCloud实战</div>
          <div class="video-list-titlea"><div>级别: 高级</div><div class="price">￥ 69</div></div>
        </div>
      </div>
    </div>


    <div style="width:100%; height:10px; background:#F4F4F4"></div>

    <div class="redm">
      <div class="reds"><van-icon name="fire-o" color="#D93F30"/><span class="redtitle">最新上线</span></div>
    </div>
    <div class="video-box">
      <div class="video-list">
        <div class="video-lista">
          <img src="@/assets/images/video_list.png" alt="">
          <div class="video-list-title">新一代微服务全家桶AlibabaCloud+SpringCloud实战</div>
          <div class="video-list-titlea"><div>级别: 高级</div><div class="price">￥ 69</div></div>
        </div>
        <div class="video-lista video-listb">
          <img src="@/assets/images/video_list.png" alt="">
          <div class="video-list-title">新一代微服务全家桶AlibabaCloud+SpringCloud实战</div>
          <div class="video-list-titlea"><div>级别: 高级</div><div class="price">￥ 69</div></div>
        </div>
      </div>
       <div class="video-list">
        <div class="video-lista">
          <img src="@/assets/images/video_list.png" alt="">
          <div class="video-list-title">新一代微服务全家桶AlibabaCloud+SpringCloud实战</div>
          <div class="video-list-titlea"><div>级别: 高级</div><div class="price">￥ 69</div></div>
        </div>
        <div class="video-lista video-listb">
          <img src="@/assets/images/video_list.png" alt="">
          <div class="video-list-title">新一代微服务全家桶AlibabaCloud+SpringCloud实战</div>
          <div class="video-list-titlea"><div>级别: 高级</div><div class="price">￥ 69</div></div>
        </div>
      </div>
    </div>


    <div class="empty"></div>
    <tab></tab>
  </div>
</template>

<script>
import tab from '@/components/Tab.vue'
import swipe from '@/components/Swipe.vue'
import heade from '@/components/Header.vue'
export default {
  components: {
    heade,
    tab,
    swipe,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
  .redm {
    width: 100%;
    height: 20px;
    margin-top: 10px;
  }
  .reds {
    width: 100px;
    height: 20px;
    margin-left: 2.5%;
    line-height: 20px;
  }
  .redtitle{
    margin-left: 5px;
  }
  .video-list {
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 20px;
    font-size: 12px;
  }
  .video-lista {
    width: calc(100% - 10px);
    height: 190px;
    /* background: red; */
  }
  .video-lista img {
    width: 100%;
    height: 120px;
    border-radius: 10px;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  }
  .video-listb {
    margin-left: 10px;
  }
  .video-list-title {
    width: 100%;
    height: 40px;
    margin-top: 5px;
  }
  .video-list-titlea {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
  }
  .video-list-titlea .price {
    color: #D93F30;
  }
  .video-box {
    display: flex;
    flex-wrap: wrap;
  }
  .empty {
    width: 100%;
    height: 50px;
  }

  @media (max-width: 570px){ 
       .video-lista img {
          height: 110px;
      }
       .video-list-title {
        height: 50px;
      }
   }
</style>