<template>
  <div>
     <div class="nick">
        <van-image
            round
            width="5rem"
            height="5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="nick-name">昵称：惺惺相惜先</div>
     </div>

    <van-collapse v-model="activeNames">
        <van-collapse-item title="我的视频" name="1">
           <van-swipe-cell v-for="(item, index) in 3" :key="index">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    class="goods-card"
                    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                />
           </van-swipe-cell>
           <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
        </van-collapse-item>
        <van-collapse-item title="我的收藏" name="2">
            <van-swipe-cell v-for="(item, index) in 4" :key="index">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    class="goods-card"
                    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                </template>
           </van-swipe-cell>
           <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
        </van-collapse-item>
        <van-collapse-item title="我的购物车" name="3">
            <van-swipe-cell v-for="(item, index) in 4" :key="index">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    class="goods-card"
                    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                    <van-button square text="支付" type="warning" class="delete-button" />
                </template>
           </van-swipe-cell>
           <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
        </van-collapse-item>
        <van-collapse-item title="未支付订单" name="4">
            <van-swipe-cell v-for="(item, index) in 4" :key="index">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    class="goods-card"
                    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <template #right>
                    <van-button square text="取消" color="#333333" class="delete-button" />
                    <van-button square text="支付" type="warning" class="delete-button" />
                </template>
           </van-swipe-cell>
        </van-collapse-item>
    </van-collapse>


    <div class="empty"></div>
    <tab></tab>
  </div>
</template>

<script>
import tab from '@/components/Tab.vue'
export default {
    data() {
        return {
            activeNames: []
        }
    },
    components: {
        tab
    }
}
</script>

<style>
    .nick {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
    }
    .nick-name {
        width: 200px;
        height: 80px;
        line-height: 80px;
        margin-top: 10px;
        
    }
    .nick .van-image {
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }


    .goods-card {
        margin: 0;
        background-color: white;
    }

    .delete-button {
        height: 100%;
    }
</style>