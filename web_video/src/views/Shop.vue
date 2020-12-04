<template>
    <div>
        <div class="header-nav">
           <van-tabs>
                <van-tab v-for="(item,index) in tab_list" :title="item.title" :key="index">{{item.content}}</van-tab>
            </van-tabs>
        </div>


        <div class="empty"></div>
        <tab></tab>
    </div>
</template>

<script>
import tab from '@/components/Tab.vue'
export default {
    data() {
        return {
            tab_list:[
                {title: '标签 1', content:'内容1'},
                {title: '标签 2', content:'内容2'},
                {title: '标签 3', content:'内容3'},
                {title: '标签 4', content:'内容4'},
                {title: '标签 5', content:'内容5'},
                {title: '标签 6', content:'内容6'},
                {title: '标签 7', content:'内容7'},
                {title: '标签 8', content:'内容8'},
            ]
        }
    },
    components: {
        tab
    }
}
</script>


<style>
    .empty {
        width: 100%;
        height: 50px;
    }

</style>