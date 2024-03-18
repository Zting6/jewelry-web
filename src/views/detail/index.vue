<template>
    <div class="outer">
        <Header></Header>
        <div class="main">
            <div class="pro">
                <div class="proPics">
                    <div class="propic">
                        <img src="https://asset.swarovski.com.cn/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_675/5678045_ms1/swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.jpg"
                            alt="">
                    </div>
                    <div class="propic">
                        <img src="https://asset.swarovski.com.cn/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_675/5678045_ms1/swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.jpg"
                            alt="">
                    </div>
                </div>
                <Zoom :imgurl="imgSrc">
                </Zoom>
                <div class="pro_info">
                    <span class="title">
                        Swarovski Swan 链坠
                    </span>
                    <span class="money">1,550 ¥</span>
                    <span class="cart">加入购物袋</span>
                </div>
            </div>

        </div>


    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import Header from "@/views/detail/components/header.vue"
import Zoom from "@/views/detail/components/Zoom.vue"

const imgSrc = "https://asset.swarovski.com.cn/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_675/5678045_ms1/swarovski-swan-%E9%93%BE%E5%9D%A0--%E5%A4%A9%E9%B9%85--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5678045.jpg"
</script>
<style scoped>
.outer {
    background-color: rgb(240, 238, 228);
}

.main {
    width: 1500px;
    height: 800px;
    margin: 0 auto;
    margin-top: 20px;

}

.pro {
    display: flex;
    justify-content: center;
}

.proPics {}

.propic {
    width: 120px;
    height: 120px;
    margin-right: 40px;
    margin-bottom: 20px;
    border: 1px solid rgb(66, 66, 66);
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }
}

.propic::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: red;

}

.pro_info {
    width: 560px;
    height: 340px;
    background-color: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    margin-left: 40px;

    .title {
        height: 100px;
        margin-top: 20px;
        font-size: 18px;
        font-weight: 600;
    }

    .money {
        font-size: 16px;
    }

    .cart {
        margin: 0 auto;
        width: 100%;
        height: 38px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 14px;
        border: 1px solid black;
        margin-top: 100px;
        transition: all .3s ease-in-out;
    }

    .cart:hover {
        cursor: pointer;
        color: black;
        background-color: transparent;
    }
}
</style>
