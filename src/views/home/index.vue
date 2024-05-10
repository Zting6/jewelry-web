<template>
    <div class="outer">
        <div class="top">
            <el-carousel height="80vh">
                <el-carousel-item v-for="item in actImgs" :key="item">
                    <img class="actimg" :src="item" alt="">

                </el-carousel-item>
            </el-carousel>
            <div class="top_span">
                <h1>你的闪耀之年</h1>
                <span>以层叠仿水晶打造闪亮开端</span>
                <div>立即选购</div>
            </div>

        </div>
        <div class="about">
            <span><router-link to="/prolist">自 1895 年以来，我们的创办人 Daniel Swarovski
                    把对创新研发和设计的热诚、匠心独运的仿水晶精湛技艺灌注到我们的品牌上，将施华洛世奇打造成业界有名的首饰和配饰品牌。</router-link></span>
        </div>
        <div class="products">
            <h1>新品推荐</h1>
            <div class="pros" style=" padding: 20px 160px;">
                <router-link to="/detail">
                    <div class="pro acShow">
                        <div class="proImg" style=" width: 622px;
            height: 420px;">
                            <img src="../../../public/proimg/pro1.jpg" alt="">
                        </div>
                        <div class="proTitle">
                            <span>清安系列珠宝</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/detail">
                    <div class="pro acShow">
                        <div class="proImg" style=" width: 622px;
            height: 420px;">
                            <img src="../../../public/proimg/pro2.jpg" alt="">
                        </div>
                        <div class="proTitle">
                            <span>清安系列珠宝</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/detail">
                    <div class="pro acShow">
                        <div class="proImg" style=" width: 622px;
            height: 420px;">
                            <img src="../../../public/proimg/pro3.jpg" alt="">
                        </div>
                        <div class="proTitle">
                            <span>清安系列珠宝</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/detail">
                    <div class="pro acShow">
                        <div class="proImg" style=" width: 622px;
            height: 420px;">
                            <img src="../../../public/proimg/pro4.jpg" alt="">
                        </div>
                        <div class="proTitle">
                            <span>清安系列珠宝</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="cates">
            <h1 class="cate_title">佩戴你所热爱的</h1>
            <div class="cts">
                <div class="ct acShow">
                    <div class="ct_Img">
                        <img src="../../../public/outsidePro/neck.jpg" alt="">
                    </div>
                    <div class="ct_txt">
                        <h1>光彩夺目的项链</h1>
                        <span>长方形和锥状长方形混合切割仿水晶搭配施华洛世奇合成立方氧化锆，迸发美感，极具 savoir-faire，是纪念专属缘分的心动之选。</span>
                        <div class="buyButton">
                            立即选购
                        </div>
                    </div>
                </div>
                <div class="ct acShow">
                    <div class="ct_Img">
                        <img src="../../../public/outsidePro/bracelet.jpg" alt="">
                    </div>
                    <div class="ct_txt">
                        <h1>尽显优雅的手链</h1>
                        <span>色彩缤纷的饰石点缀施华洛世奇经典的 tennis 造型，是送给最重要女性的华丽礼物，包边镶嵌的仿水晶绽放优雅光芒，带来令人愉悦的奢华质感。</span>
                        <div class="buyButton">
                            立即选购
                        </div>
                    </div>
                </div>
                <div class="ct acShow">
                    <div class="ct_Img">
                        <img src="../../../public/outsidePro/earring.jpg" alt="">
                    </div>
                    <div class="ct_txt">
                        <h1>活力四射的耳环</h1>
                        <span>独特而大胆的全切割仿水晶大圈耳环彰显现代魅力，透明仿水晶环绕点缀，仿佛吟唱一曲隽永颂歌。</span>
                        <div class="buyButton">
                            立即选购
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="product" class="welcome">
            <div class="container">
                <h3>按类别选购</h3>
                <div class="welcome-info">
                    <div class="col-md-3 wl">
                        <a href="#" class="mask"><img
                                src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5342,h_5342,x_2671,y_3366/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_ALWAYSON_VISUAL_LOOKBOOK-27_OF_GL_72DPI_RGB/.jpg"
                                alt="image" class="img-responsive zoom-img"></a>

                        <h4>Sed ut perspiciatis unde</h4>
                        <p>Adults trained the young in the knowledge and skills Lapeyrouse inFashion Elle Moscow, Russia
                        </p>
                    </div>
                    <div class="col-md-3 wl">
                        <a href="#" class="mask"><img
                                src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_4288,h_5717,x_6000,y_3471/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_HOLIDAY_VISUAL_BODYP-3_OF_GL_72DPI_RGB/.jpg"
                                alt="image" class="img-responsive zoom-img"></a>

                        <h4>Sed ut perspiciatis unde</h4>
                        <p>Adults trained the young in the knowledge and skills Lapeyrouse inFashion Elle Moscow, Russia
                        </p>
                    </div>
                    <div class="col-md-3 wl">
                        <a href="#" class="mask"><img
                                src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_4222,h_4223,x_2755,y_3865/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_ALWAYSON_VISUAL_LOOKBOOK-19_OF_GL_72DPI_RGB/.jpg"
                                alt="image" class="img-responsive zoom-img"></a>

                        <h4>Sed ut perspiciatis unde</h4>
                        <p>Adults trained the young in the knowledge and skills Lapeyrouse inFashion Elle Moscow, Russia
                        </p>
                    </div>
                    <div class="col-md-3 wl">
                        <a href="#" class="mask"><img
                                src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5128,h_6837,x_6000,y_4858/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_HOLIDAY_VISUAL_MODEL-6_OF_GL_72DPI_RGB/.jpg"
                                alt="image" class="img-responsive zoom-img"></a>

                        <h4>Sed ut perspiciatis unde</h4>
                        <p>Adults trained the young in the knowledge and skills Lapeyrouse inFashion Elle Moscow, Russia
                        </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>

        <div class="necklace">
            <h3>更多项链</h3>
            <ul class="necs pros">
                <li class="nec pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/neck1.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列项链</span>
                    </div>
                </li>
                <li class="nec pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/neck2.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列项链</span>
                    </div>
                </li>
                <li class="nec pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/neck3.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列项链</span>
                    </div>
                </li>
                <li class="nec pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/neck4.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列项链</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bracelet">
            <h3>更多手链</h3>
            <ul class="brcs pros">
                <li class="brc pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/bracelet1.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列手链</span>
                    </div>
                </li>
                <li class="brc pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/bracelet2.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列手链</span>
                    </div>
                </li>
                <li class="brc pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/bracelet3.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列手链</span>
                    </div>
                </li>
                <li class="brc pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/bracelet4.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列手链</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="earring">
            <h3>更多耳环</h3>
            <ul class="ris pros">
                <li class="ri pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/earring1.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列耳环</span>
                    </div>
                </li>
                <li class="ri pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/earring2.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列耳环</span>
                    </div>
                </li>
                <li class="ri pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/earring3.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列耳环</span>
                    </div>
                </li>
                <li class="ri pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/earring4.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列耳环</span>
                    </div>
                </li>
            </ul>
        </div>

        <div class="decoration">
            <h3>更多装饰摆件</h3>
            <ul class="decs pros">
                <li class="dec pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/desc1.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列摆件</span>
                    </div>
                </li>
                <li class="dec pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/desc2.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列摆件</span>
                    </div>
                </li>
                <li class="dec pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/desc3.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列摆件</span>
                    </div>
                </li>
                <li class="dec pro acShow">
                    <div class="proImg">
                        <img src="../../../public/outsidePro/desc4.jpg" alt="">
                    </div>
                    <div class="proTitle">
                        <span>清安系列摆件</span>
                    </div>
                </li>
            </ul>
        </div>

        <div id="testimonials" class="people">
            <div class="container">
                <div class="people-top heading">
                    <h3>What People Say?</h3>
                </div>
                <div class="people-bottom">
                    <div class="col-md-6 people-left">

                        <div class="p-right">
                            <h4>Quisque gravida pharetra vehicula</h4>
                            <p>Fusce vulputate vel nisl at condimentum. Etiam efficitur est eu mauris mattis, vestibulum
                                semper libero tempus. Quisque at augue venenatis.</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="col-md-6 people-left">

                        <div class="p-right">
                            <h4>Quisque gravida pharetra vehicula</h4>
                            <p>Fusce vulputate vel nisl at condimentum. Etiam efficitur est eu mauris mattis, vestibulum
                                semper libero tempus. Quisque at augue venenatis.</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>




    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue"
import "./js/smoothscroll.js";
import { cateList } from '@/api/home/index'


const isHome = ref(true)
const actImgs = ref([
    "https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_3794,h_2135,x_3291,y_2288/dpr_1.0,f_auto,q_auto,c_lfill,w_1920,h_880/swa-cms/2023_HOLIDAY_KV_MESMERA_OF_GL_72DPI_RGB_EXT2/.jpg",
    "https://www.swarovski.com.cn/medias/1920x880-WD.jpg?context=bWFzdGVyfHJvb3R8MTA1MDcyfGltYWdlL2pwZWd8aDEyL2hmNy85OTM1MzQ0NDM1MjMwLmpwZ3w2NDk0NWY2NjI2ZGY5ZmMzM2VmMWMxY2EzYzFhNGI3Zjg1MmNhNmQ2M2RlMzI5OTdmMjcwN2U0ZGI0Y2U2YWI5",
    "https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_11649,h_6548,x_6035,y_5239/dpr_1.0,f_auto,q_auto,c_lfill,w_1920,h_880/swa-cms/SS22_BRAND_VISUAL-BODYP-WRIST-PINK_OF_GL_300DPI_RGB/5633635-5633628-5615110-5613558-5409771-5493711.jpg",
])


const handleScroll = () => {
    const elements = document.querySelectorAll('.acShow')
    const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    elements.forEach((element: HTMLElement) => {
        const elementTop = element.offsetTop
        const height = element.clientHeight

        const scrollTop = document.documentElement.scrollTop
        if (elementTop + height / 2 - scrollTop <= clientHeight) {
            console.log('进入可视化区域');
            if (element.style) {
                element.style.opacity = "1"

            }
        } else {
            console.log('消失在可视化区域')
        }
    })
}

const getCateList = async () => {
    await cateList().then(res => {
        console.log('catelist: ', res);
    })
}


onMounted(() => {
    // 获取所有带有 acShow 类名的元素
    handleScroll()
    getCateList();


    // 添加滚动监听
    window.addEventListener('scroll', handleScroll)

    // 在组件卸载时移除监听器
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
})


</script>
<style scoped>
.outer {
    /* height: 2000px; */
    background-color: rgb(240, 238, 228);
}

/* 渐显效果 */
.acShow {
    opacity: 0;
}

.top {
    position: relative;
}

.top_span {
    position: absolute;
    bottom: 206px;
    left: 140px;
    color: white;

    h1 {
        font-size: 52px;
    }

    div {
        width: 160px;
        height: 32px;
        background-color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 14px;
        border: 1px solid aliceblue;
        margin-top: 30px;
        transition: all .3s ease-in-out;
    }

    div:hover {
        cursor: pointer;
        color: white;
        background-color: transparent;
    }
}

.actimg {
    width: 100vw;
    /* height: 100vh; */
}

.about {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

}

.pros {

    display: flex;
    margin: 42px 0;
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-evenly;


    /* 渐显效果 */
    .pro:nth-child(1) {
        transition: all .4s;
    }

    .pro:nth-child(2) {
        transition: all .6s;
    }

    .pro:nth-child(3) {
        transition: all .8s;
    }

    .pro:nth-child(4) {
        transition: all 1.0s;
    }

    .pro:nth-child(2n-1) {
        margin-right: 6px;
    }

    .pro {

        margin-bottom: 26px;

        .proImg {

            width: 722px;
            height: 358px;
            overflow: hidden;

            img {
                width: 100%;
                height: 106%;
                transition: all .3s;

            }

            img:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
        }

        .proTitle {
            width: 100%;
            height: 50px;
            background-color: rgb(248, 247, 242);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -6px;
        }
    }
}

.cates {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 120px;

    .cate_title {
        margin: 32px 0;
        margin-top: 80px;
        font-size: 36px;
        font-family: 'Courier New', Courier, monospace;
    }

    .cts {
        display: flex;
        margin: 42px 0;
        width: 100vw;
        flex-wrap: wrap;
        justify-content: space-evenly;

        .ct:nth-child(1) {
            transition: all .6s ease-in;
        }

        .ct:nth-child(2) {
            transition: all 1.2s ease-in;
        }

        .ct:nth-child(3) {
            transition: all 1.8s ease-in;
        }


        .ct {
            display: flex;
            flex-direction: column;

            .ct_Img {
                width: 446px;
                height: 595px;

                img {
                    width: 446px;
                    height: 595px;
                }
            }

            .ct_txt {
                margin: 20px 0;

                h1 {
                    font-size: 26px;
                    margin-bottom: 20px;
                }

                span {
                    display: inline-block;
                    width: 420px;
                }


                .buyButton {
                    width: 160px;
                    height: 32px;
                    background-color: transparent;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: black;
                    font-size: 14px;
                    border: 1px solid black;
                    margin-top: 30px;
                    transition: all .3s ease-in-out;
                }

                .buyButton:hover {
                    cursor: pointer;
                    color: black;
                    background-color: rgb(248, 247, 242);
                }
            }
        }
    }
}



/* welcome starts */
.welcome {
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    margin: 180px 0;
    background-color: #f7f7f7;
    box-shadow: 0px 0 7px #999;
}

.welcome h3 {
    color: black;
    font-size: 2.6em;
    margin: 20px 0;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
}

.welcome-info {
    /* background-color: #f7f7f7; */
    min-height: 150px;
    /* box-shadow: 0px 0 7px #999; */
    margin-top: 2em;
    display: flex;
}

.wl {
    padding: 1em;
    width: 25%;
}

.wl img {
    width: 100%;
}

.wl h4 {
    font-size: 1.4em;
    padding: 1em 0 .5em;
    font-weight: 400;
    color: #4A4A4A;
}

.wl p {
    font-size: .95em;
    font-weight: 400;
    color: #B7B7B7;
    line-height: 2em;
}

a.mask {
    text-decoration: none;
    overflow: hidden;
    display: block;

}

a.mask:hover {
    background-color: rgb(240, 238, 228);
}

img.zoom-img {
    -webkit-transform: scale(1, 1);
    -webkit-transition-timing-function: ease-out;
    -webkit-transition-duration: 250ms;
    -moz-transform: scale(1, 1);
    -moz-transition-timing-function: ease-out;
    -moz-transition-duration: 250ms;
    -webkit-transform: rotate(320deg);
    transform: rotate(320deg);
}

img.zoom-img:hover {
    -webkit-transform: scale(1.18);
    -webkit-transition-timing-function: ease-out;
    -webkit-transition-duration: 750ms;
    -moz-transform: scale(1.15);
    -moz-transition-timing-function: ease-out;
    -moz-transition-duration: 750ms;
    overflow: hidden;

}

/* people starts */
.people {
    background: url(https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_12015,h_4068,x_6008,y_5769/dpr_1.0,f_auto,q_auto,c_lfill,w_1920,h_519/swa-cms/2023_HOLIDAY_VISUAL_MODEL-3_OF_GL_72DPI_RGB/.jpg)fixed;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: -1030px;
    min-height: 390px;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    display: flex;
    justify-content: center;
    margin-top: 160px;

    .container {
        width: 72%;

    }
}

.people-top h3 {
    color: #fff;
    font-size: 52px;

}

.people-top {
    margin-top: 6%;
}

.people-bottom {
    margin-top: 4%;
    display: flex;
    margin-bottom: 80px;
}



.p-right {
    width: 69%;
    float: right;
}


.p-right h4 {
    font-size: 1.4em;
    color: #fff;
    margin: 0;
    line-height: 1.3em;
    font-weight: 400;
}

.p-right p {
    font-size: .95em;
    color: #B5B5B5;
    margin-top: 20px;
    line-height: 2.2em;
}

/* necklace starts */
.necklace {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;

    .necs {
        width: 80%;
        display: flex;
        justify-content: space-around;

        .pro {
            margin: 0;
        }


        /* 渐显效果 */
        .pro:nth-child(1) {
            transition: all .4s;
        }

        .pro:nth-child(2) {
            transition: all 1.2s;
        }

        .pro:nth-child(3) {
            transition: all 2.0s;
        }

        .pro:nth-child(4) {
            transition: all 2.8s;
        }

        .nec {
            width: 358px;
            display: flex;
            flex-direction: column;

            .proImg {
                width: 358px;
                height: 358px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 358px;
                    height: 358px;

                }
            }

            .proTitle {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

            }


        }
    }
}

/* bracelet starts */
.bracelet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;

    .brcs {
        width: 80%;
        display: flex;
        justify-content: space-around;

        .pro {
            margin: 0;
        }

        /* 渐显效果 */
        .pro:nth-child(1) {
            transition: all .4s;
        }

        .pro:nth-child(2) {
            transition: all 1.2s;
        }

        .pro:nth-child(3) {
            transition: all 2.0s;
        }

        .pro:nth-child(4) {
            transition: all 2.8s;
        }

        .brc {
            width: 358px;
            display: flex;
            flex-direction: column;

            .proImg {
                width: 100%;
                overflow: hidden;

                img {
                    width: 358px;
                    height: 358px;

                }
            }

            .proTitle {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

            }


        }
    }
}

/* earring starts */
.earring {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;

    .ris {
        width: 80%;
        display: flex;
        justify-content: space-around;

        .pro {
            margin: 0;
        }

        /* 渐显效果 */
        .pro:nth-child(1) {
            transition: all .4s;
        }

        .pro:nth-child(2) {
            transition: all 1.2s;
        }

        .pro:nth-child(3) {
            transition: all 2.0s;
        }

        .pro:nth-child(4) {
            transition: all 2.8s;
        }

        .ri {
            width: 358px;
            display: flex;
            flex-direction: column;

            .proImg {
                width: 100%;
                overflow: hidden;

                img {
                    width: 358px;
                    height: 358px;

                }
            }

            .proTitle {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

            }


        }
    }
}

/* decoration starts */
.decoration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;

    .decs {
        width: 80%;
        display: flex;
        justify-content: space-around;

        .pro {
            margin: 0;
        }

        /* 渐显效果 */
        .pro:nth-child(1) {
            transition: all .4s;
        }

        .pro:nth-child(2) {
            transition: all 1.2s;
        }

        .pro:nth-child(3) {
            transition: all 2.0s;
        }

        .pro:nth-child(4) {
            transition: all 2.8s;
        }

        .dec {
            width: 358px;
            display: flex;
            flex-direction: column;

            .proImg {
                width: 100%;
                overflow: hidden;

                img {
                    width: 358px;
                    height: 358px;

                }
            }

            .proTitle {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

            }


        }
    }
}
</style>
