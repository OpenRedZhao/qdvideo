<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="@/assets/images/video_list.png" alt="" class="my-img"></van-swipe-item>
        <van-swipe-item><img src="@/assets/images/video_list.png" alt=""  class="my-img"></van-swipe-item>
        <van-swipe-item><img src="@/assets/images/video_list.png" alt=""  class="my-img"></van-swipe-item>
        <van-swipe-item><img src="@/assets/images/video_list.png" alt=""  class="my-img"></van-swipe-item>
    </van-swipe>

</template>

<script>
export default {
    methods: {
       
    }
}
</script>

<style>
  .my-img {
    width: 100%;
    height: 100%;
  }
</style>