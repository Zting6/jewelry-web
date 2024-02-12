<template>
    <div class="outer" :class="{ outer: isAtTop, outer_untop: !isAtTop }">
        <div class="top">
            <div class="location">
                <el-icon>
                    <Location />
                </el-icon>
                <span>中国大陆地区</span>
            </div>
            <div class="top_title">
                <span>全场购物</span>
                <span>享顺丰快递</span>
                <span>免运费</span>
            </div>
            <div class="user">
                <el-icon>
                    <User />
                </el-icon>
                <div class="login">

                    <router-link to="/login">
                        <span>登录</span>
                    </router-link>
                </div>

                <div>
                    |
                </div>
                <div class="register">
                    <span>注册</span>
                </div>

            </div>
        </div>
        <transition name="slide-fade">
            <div class="middle">
                <router-link to="/"><span id="title">Secluded Resigned</span></router-link>

            </div>
        </transition>
        <a href="/login">nb</a>

        <ul class="bottom">
            <li class="b_1">新品上市</li>
            <li class="b_2">
                配饰
                <ul class="inner b_i_2">
                    <li>
                        <span>项链</span>
                        <ul class="content">
                            <li>项链</li>
                            <li>吊坠</li>
                            <li>束颈项链</li>
                            <li>套装</li>
                        </ul>
                    </li>
                    <li>
                        <span>戒指</span>
                        <ul class="content">
                            <li>光环戒指</li>
                            <li>图像戒指</li>
                            <li>简约造型戒指</li>
                            <li>个性戒指</li>
                            <li>可调节戒指</li>
                        </ul>
                    </li>
                    <li>
                        <span>手链</span>
                        <ul class="content">
                            <li>链式手镯</li>
                            <li>可调式手链</li>
                            <li>手链</li>
                            <li>手镯</li>
                        </ul>
                    </li>
                    <li>
                        <span>按系列选购</span>
                        <ul class="content">
                            <li>花卉系列</li>
                            <li>蝴蝶系列</li>
                            <li>星星系列</li>
                            <li>爱心系列</li>
                        </ul>
                    </li>
                    <li>
                        <span>系列首饰</span>
                        <img src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5128,h_6837,x_6000,y_4858/dpr_2.0,f_auto,q_auto,c_lfill,w_285,h_365/swa-cms/2023_HOLIDAY_VISUAL_MODEL-6_OF_GL_72DPI_RGB/.jpg"
                            alt="">
                    </li>
                </ul>
            </li>
            <li class="b_3">装饰摆件
                <ul class="inner b_i_3">
                    <li>
                        <span>项链</span>
                        <ul class="content">
                            <li>项链</li>
                            <li>吊坠</li>
                            <li>束颈项链</li>
                            <li>套装</li>
                        </ul>
                    </li>
                    <li>
                        <span>戒指</span>
                        <ul class="content">
                            <li>光环戒指</li>
                            <li>图像戒指</li>
                            <li>简约造型戒指</li>
                            <li>个性戒指</li>
                            <li>可调节戒指</li>
                        </ul>
                    </li>
                    <li>
                        <span>手链</span>
                        <ul class="content">
                            <li>链式手镯</li>
                            <li>可调式手链</li>
                            <li>手链</li>
                            <li>手镯</li>
                        </ul>
                    </li>
                    <li>
                        <span>按系列选购</span>
                        <ul class="content">
                            <li>花卉系列</li>
                            <li>蝴蝶系列</li>
                            <li>星星系列</li>
                            <li>爱心系列</li>
                        </ul>
                    </li>
                    <li>
                        <span>系列首饰</span>
                        <img src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5128,h_6837,x_6000,y_4858/dpr_2.0,f_auto,q_auto,c_lfill,w_285,h_365/swa-cms/2023_HOLIDAY_VISUAL_MODEL-6_OF_GL_72DPI_RGB/.jpg"
                            alt="">
                    </li>
                </ul>
            </li>
            <li class="b_4">礼品</li>
            <li class="b_5">优惠专区</li>
            <li class="b_6">团购专区</li>
            <li class="b_7">搜索</li>
            <li class="b_8">购物车</li>
        </ul>

    </div>
    <div class="outersmall" :class="{ outersmall: isAtTop, outersmall_untop: !isAtTop }">
        <div class="os_inner">
            <router-link to="/">
                <div class="os_title">SECLUDED RESIGNED</div>
            </router-link>
            <div class="os_content">
                <ul class="bottom">
                    <li class="b_1">新品上市</li>
                    <li class="b_2">
                        配饰
                        <ul class="inner b_i_2">
                            <li>
                                <span>项链</span>
                                <ul class="content">
                                    <li>项链</li>
                                    <li>吊坠</li>
                                    <li>束颈项链</li>
                                    <li>套装</li>
                                </ul>
                            </li>
                            <li>
                                <span>戒指</span>
                                <ul class="content">
                                    <li>光环戒指</li>
                                    <li>图像戒指</li>
                                    <li>简约造型戒指</li>
                                    <li>个性戒指</li>
                                    <li>可调节戒指</li>
                                </ul>
                            </li>
                            <li>
                                <span>手链</span>
                                <ul class="content">
                                    <li>链式手镯</li>
                                    <li>可调式手链</li>
                                    <li>手链</li>
                                    <li>手镯</li>
                                </ul>
                            </li>
                            <li>
                                <span>按系列选购</span>
                                <ul class="content">
                                    <li>花卉系列</li>
                                    <li>蝴蝶系列</li>
                                    <li>星星系列</li>
                                    <li>爱心系列</li>
                                </ul>
                            </li>
                            <li>
                                <span>系列首饰</span>
                                <img src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5128,h_6837,x_6000,y_4858/dpr_2.0,f_auto,q_auto,c_lfill,w_285,h_365/swa-cms/2023_HOLIDAY_VISUAL_MODEL-6_OF_GL_72DPI_RGB/.jpg"
                                    alt="">
                            </li>
                        </ul>
                    </li>
                    <li class="b_3">装饰摆件
                        <ul class="inner b_i_3">
                            <li>
                                <span>项链</span>
                                <ul class="content">
                                    <li>项链</li>
                                    <li>吊坠</li>
                                    <li>束颈项链</li>
                                    <li>套装</li>
                                </ul>
                            </li>
                            <li>
                                <span>戒指</span>
                                <ul class="content">
                                    <li>光环戒指</li>
                                    <li>图像戒指</li>
                                    <li>简约造型戒指</li>
                                    <li>个性戒指</li>
                                    <li>可调节戒指</li>
                                </ul>
                            </li>
                            <li>
                                <span>手链</span>
                                <ul class="content">
                                    <li>链式手镯</li>
                                    <li>可调式手链</li>
                                    <li>手链</li>
                                    <li>手镯</li>
                                </ul>
                            </li>
                            <li>
                                <span>按系列选购</span>
                                <ul class="content">
                                    <li>花卉系列</li>
                                    <li>蝴蝶系列</li>
                                    <li>星星系列</li>
                                    <li>爱心系列</li>
                                </ul>
                            </li>
                            <li>
                                <span>系列首饰</span>
                                <img src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5128,h_6837,x_6000,y_4858/dpr_2.0,f_auto,q_auto,c_lfill,w_285,h_365/swa-cms/2023_HOLIDAY_VISUAL_MODEL-6_OF_GL_72DPI_RGB/.jpg"
                                    alt="">
                            </li>
                        </ul>
                    </li>
                    <li class="b_4">礼品</li>
                    <li class="b_5">优惠专区</li>
                    <li class="b_6">团购专区</li>
                    <li class="b_7">搜索</li>
                    <li class="b_8">购物车</li>
                </ul>
            </div>


        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
const isAtTop = ref(false);



onMounted(() => {

});





</script>
<style scoped>
.outer {
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: all .5s ease-in-out;

    z-index: 100;
    color: black;
    background-color: rgb(240, 238, 228);

    /* box-shadow: 0 0 20px 20px transparent; */

}

.outer_untop {
    display: none;

}

.outersmall {
    display: none;
}

.outersmall_untop {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    transition: all .5s ease-in-out;
    color: black;
    background-color: rgb(255, 255, 255);
    position: fixed;
    z-index: 100;

    .os_inner {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .os_title {
        font-size: 22px;
        width: 262px;
        height: 100%;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .os_content {
        /* margin-left: 230px; */
        position: fixed;
        left: 542px;
    }

    .bottom {
        margin: 0 auto;
        position: fixed;
    }

    .bottom>li {

        margin-right: 60px;
    }

    /* 搜索 */
    .bottom>li:nth-last-child(2) {
        /* margin-left: 520px; */
        position: fixed;
        right: 100px;
    }

    /* 购物袋 */
    .bottom>li:nth-last-child(1) {
        /* margin-left: 10px; */
        position: fixed;
        right: 0px;
    }


    .b_i_2 {
        padding-left: 200px;
    }

    .b_i_3 {
        padding-left: 0;
    }
}



.top {
    width: 100%;
    display: flex;
    padding: 6px 22px;

    font-size: 14px;
}

.location {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.top_title {
    margin: 0 auto;
    width: 198px;
    display: flex;
    justify-content: space-evenly;
}

.user {
    width: 110px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.middle {
    display: flex;
    justify-content: center;
    font-size: 90px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: height .8s;
    overflow: hidden;

    transform: translateY(0);
    transition: transform 0.5s;
}

.middle.hidden {
    transform: translateY(-100%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}


.bottom {
    margin: 0 auto;
    display: flex;
    position: relative;
    padding-bottom: 20px;
}

.bottom>li {
    width: 90px;
    display: flex;
    justify-content: center;
    padding: 12px 0px;
    margin-right: 60px;
    transition: border-bottom .2s ease-in-out;

}

.bottom>li:hover {
    border-bottom: 2px solid black;
}

.inner {
    color: black;
    display: none;
    position: absolute;
    top: 50px;
    width: 140vw;
    background-color: white;
    /* display: flex; */
    justify-content: center;
    margin: 0 auto;
    margin-left: 351px;
    font-size: 13px;
}


.b_i_2 {
    padding-left: 460px;
}

.b_i_3 {
    padding-left: 155px;
}

.b_2:hover .b_i_2 {
    display: flex;
}

.b_3:hover .b_i_3 {
    display: flex;
}

.inner>li {
    width: 260px;
    display: flex;
    flex-direction: column;
    padding: 36px 50px;

    span {
        color: black;
        margin-bottom: 16px;

    }

    .content {
        color: rgb(154, 154, 154);

        li {
            margin-bottom: 10px;
            transition: all .2s linear;
        }

        li:hover {
            color: rgb(114, 114, 114);
            transform: scale(1.05);
        }
    }

    img {
        transition: all .2s linear;
    }

    img:hover {
        transform: scale(1.05);
    }
}
</style>
