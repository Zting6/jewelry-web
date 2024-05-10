<template>
    <div class="outer">
        <Header></Header>
        <div class="main">
            <div class="PaycartBody">
                <div class="cart-complete">
                    <h3>
                        <img width="30px" height="30px" src="../../../../public/img/tick.png" alt="">
                        <span>商品已成功加入购物车！</span>
                    </h3>
                    <div class="goods">
                        <div class="left-good">
                            <div class="left-pic"><img :src="skuInfo.mainimage"></div>
                            <div class="right-info">
                                <p class="title">{{ skuInfo.name }}</p>
                                <p class="attr">数量：{{ $route.query.quantity }}</p>
                            </div>
                        </div>
                        <div class="right-gocart">
                            <router-link class="btn-details"
                                :to="getDetailLink($route.query.proid)">查看商品详情</router-link>
                            <span class="settlement"><router-link to="/cart">去购物车结算 &gt; </router-link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue"
import Header from "@/components/header/static_header.vue"
import Zoom from "@/views/detail/components/Zoom.vue"

const imgSrc = "https://asset.swarovski.com.cn/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_675/5678045_ms1/swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.jpg"

const skuInfo = computed(() => {
    return {
        mainimage: "https://asset.swarovski.com.cn/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_675/5678045_ms1/swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.jpg",
        name: "精品首饰"

    };
});


const getDetailLink = (proid: any) => {
    return `/detail/${proid}`;
}
</script>
<style scoped>
.outer {
    background-color: rgb(240, 238, 228);
}

.main {
    /* width: 1500px; */
    height: 800px;
    margin: 0 auto;
    margin-top: 20px;

}

.pro {
    display: flex;
    justify-content: center;
}




.PaycartBody {
    height: 520px;
    background-color: white;
    margin-top: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-complete {
    margin: 0 auto;
    width: 80%;
    border: 1px solid #dedede;
    padding: 29px 80px;
    background-color: white;

}

.cart-complete h3 {
    margin: 0;
    padding-top: 20px;
    display: flex;
    height: 40px;

}

.cart-complete h3 span {
    color: #63a666;
    font-weight: normal;
    align-items: center;
    margin-left: 10px;
}

.goods {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.left-pic {
    float: left;
}

.left-pic img {
    width: 80px;
    height: 80px;
}

.right-info {
    float: left;
    margin-left: 5px;
}

.attr {
    color: #a5afb7;
    font-size: 15px;
}

.right-gocart {
    width: 400px;
    height: 80px;
    /* float: right; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.btn-details {
    cursor: pointer;
    display: flex;
    width: 150px;
    height: 30px;
    background-color: #fff;
    justify-content: center;
    align-items: center;


    border: 1px solid gray;
}

.btn-details a {
    color: red;
    line-height: 30px;
}

.settlement {
    display: flex;
    width: 150px;
    height: 30px;
    background-color: #f0eee4;
    justify-content: center;

}

.settlement a {
    cursor: pointer;
    color: black;
    line-height: 30px;
}
</style>
