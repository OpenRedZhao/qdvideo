<template>
    <van-tabbar v-model="active" >
        <van-tabbar-item v-for="(item, index) in tab_list" :key="index" :name="item.name" :icon="item.icon" :to="item.to">{{item.content}}</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data() {
        return {
            tab_list: [
                {name:'home', icon:'home-o', to:'/', content:'首页'},
                {name:'search', icon:'search', to:'/search', content:'搜索'},
                {name:'shop', icon:'shop-o', to:'/shop', content:'商城'},
                {name:'me', icon:'user-o', to:'/me', content:'我的'}
            ],
            active: '',
        }
    },
   created() {
       const that = this
       let path_name = that.$route.path
       switch(path_name) {
           case '/index':
               that.active = 'home'
               break;
            case '/search':
                that.active = 'search'
                break;
            case '/shop':
                that.active = 'shop'
                break;
            case '/me':
                that.active = 'me'
                break;
       }
   },
    methods: {
        
    }
}
</script>