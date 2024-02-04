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
            <span>自 1895 年以来，我们的创办人 Daniel Swarovski 把对创新研发和设计的热诚、匠心独运的仿水晶精湛技艺灌注到我们的品牌上，将施华洛世奇打造成业界有名的首饰和配饰品牌。</span>
        </div>
        <div class="products">
            <h1>新品推荐</h1>
            <div class="pros">
                <div class="pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5675835.jpg?context=bWFzdGVyfHJvb3R8MzI4MTB8aW1hZ2UvanBlZ3xoYjIvaDY0Lzk5Mjk3Nzk5MzczMTAuanBnfGExODM2YWM5OTRmOGNiZTdiODk5ZWE5YWNmMjdlYTA1NmQ0MGExNmE1NWVjMzYxMmJjNmYwZGIyY2RkMWQ5NmQ"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </div>
                <div class="pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5675835.jpg?context=bWFzdGVyfHJvb3R8MzI4MTB8aW1hZ2UvanBlZ3xoYjIvaDY0Lzk5Mjk3Nzk5MzczMTAuanBnfGExODM2YWM5OTRmOGNiZTdiODk5ZWE5YWNmMjdlYTA1NmQ0MGExNmE1NWVjMzYxMmJjNmYwZGIyY2RkMWQ5NmQ"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </div>
                <div class="pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5675835.jpg?context=bWFzdGVyfHJvb3R8MzI4MTB8aW1hZ2UvanBlZ3xoYjIvaDY0Lzk5Mjk3Nzk5MzczMTAuanBnfGExODM2YWM5OTRmOGNiZTdiODk5ZWE5YWNmMjdlYTA1NmQ0MGExNmE1NWVjMzYxMmJjNmYwZGIyY2RkMWQ5NmQ"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </div>
                <div class="pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5675835.jpg?context=bWFzdGVyfHJvb3R8MzI4MTB8aW1hZ2UvanBlZ3xoYjIvaDY0Lzk5Mjk3Nzk5MzczMTAuanBnfGExODM2YWM5OTRmOGNiZTdiODk5ZWE5YWNmMjdlYTA1NmQ0MGExNmE1NWVjMzYxMmJjNmYwZGIyY2RkMWQ5NmQ"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="cates">
            <h1 class="cate_title">佩戴你所热爱的</h1>
            <div class="cts">
                <div class="ct acShow">
                    <div class="ct_Img">
                        <img src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5342,h_5342,x_2671,y_3366/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_ALWAYSON_VISUAL_LOOKBOOK-27_OF_GL_72DPI_RGB/.jpg"
                            alt="">
                    </div>
                    <div class="ct_txt">
                        <h1>项链</h1>
                        <span>不同长度和配色让今年的产品更具创意 层层叠叠的项链打造时尚造型</span>
                        <div class="buyButton">
                            立即选购
                        </div>
                    </div>
                </div>
                <div class="ct acShow">
                    <div class="ct_Img">
                        <img src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5342,h_5342,x_2671,y_3366/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_ALWAYSON_VISUAL_LOOKBOOK-27_OF_GL_72DPI_RGB/.jpg"
                            alt="">
                    </div>
                    <div class="ct_txt">
                        <h1>项链</h1>
                        <span>不同长度和配色让今年的产品更具创意 层层叠叠的项链打造时尚造型</span>
                        <div class="buyButton">
                            立即选购
                        </div>
                    </div>
                </div>
                <div class="ct acShow">
                    <div class="ct_Img">
                        <img src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5342,h_5342,x_2671,y_3366/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_ALWAYSON_VISUAL_LOOKBOOK-27_OF_GL_72DPI_RGB/.jpg"
                            alt="">
                    </div>
                    <div class="ct_txt">
                        <h1>项链</h1>
                        <span>不同长度和配色让今年的产品更具创意 层层叠叠的项链打造时尚造型</span>
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
                        <p>Adults trained the young in the knowledge and skills Lapeyrouse inFashion Elle Moscow, Russia</p>
                    </div>
                    <div class="col-md-3 wl">
                        <a href="#" class="mask"><img
                                src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_4288,h_5717,x_6000,y_3471/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_HOLIDAY_VISUAL_BODYP-3_OF_GL_72DPI_RGB/.jpg"
                                alt="image" class="img-responsive zoom-img"></a>

                        <h4>Sed ut perspiciatis unde</h4>
                        <p>Adults trained the young in the knowledge and skills Lapeyrouse inFashion Elle Moscow, Russia</p>
                    </div>
                    <div class="col-md-3 wl">
                        <a href="#" class="mask"><img
                                src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_4222,h_4223,x_2755,y_3865/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_ALWAYSON_VISUAL_LOOKBOOK-19_OF_GL_72DPI_RGB/.jpg"
                                alt="image" class="img-responsive zoom-img"></a>

                        <h4>Sed ut perspiciatis unde</h4>
                        <p>Adults trained the young in the knowledge and skills Lapeyrouse inFashion Elle Moscow, Russia</p>
                    </div>
                    <div class="col-md-3 wl">
                        <a href="#" class="mask"><img
                                src="https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_5128,h_6837,x_6000,y_4858/dpr_1.0,f_auto,q_auto,c_lfill,w_1024,h_1365/swa-cms/2023_HOLIDAY_VISUAL_MODEL-6_OF_GL_72DPI_RGB/.jpg"
                                alt="image" class="img-responsive zoom-img"></a>

                        <h4>Sed ut perspiciatis unde</h4>
                        <p>Adults trained the young in the knowledge and skills Lapeyrouse inFashion Elle Moscow, Russia</p>
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
                        <img src="https://www.swarovski.com.cn/medias/5677599.jpg?context=bWFzdGVyfHJvb3R8MTEzNDB8aW1hZ2UvanBlZ3xoZjcvaDNkLzk5Mjk3ODAxOTk0NTQuanBnfDU0NzI5MWNhNjNiOTE2NzNiZmUxNzM1ZjFkNmQ4MDVhMjViNTEyODVkZmYzZTY4ODJkMWIwMDFkYWFhZjg0YTA"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="nec pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5679916.jpg?context=bWFzdGVyfHJvb3R8MTEyNjV8aW1hZ2UvanBlZ3xoZDIvaDkyLzk5MzMyMDQ0NTU0NTQuanBnfDRlMjQ5YzJkZDY2Mzk4YmM1MGVjZGRjMzdlZDU4Y2Y2ZjI5MDM2MWFmYWEzZTM0YzgxOTBhYmRkMzFiZDlkOWQ"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="nec pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5675835.jpg?context=bWFzdGVyfHJvb3R8MzI4MTB8aW1hZ2UvanBlZ3xoYjIvaDY0Lzk5Mjk3Nzk5MzczMTAuanBnfGExODM2YWM5OTRmOGNiZTdiODk5ZWE5YWNmMjdlYTA1NmQ0MGExNmE1NWVjMzYxMmJjNmYwZGIyY2RkMWQ5NmQ"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="nec pro acShow">
                    <div class="proImg">
                        <img src="https://asset.swarovski.com.cn/images/$size_1200/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_215/5521346_png/swarovski-infinity-y%E5%BD%A2%E9%A1%B9%E9%93%BE--infinity--%E7%99%BD%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5521346.png"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bracelet">
            <h3>更多手链</h3>
            <ul class="brcs pros">
                <li class="brc pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5675841.jpg?context=bWFzdGVyfHJvb3R8MTc1NTF8aW1hZ2UvanBlZ3xoZjAvaDc2Lzk5MzM2MzM1NTI0MTQuanBnfDc0ZjkwYjhhZmI2NjhlODhhODQ2ZDM1N2MwMGY4ZDA0MmMyZDEyMzU3MmY3NmY0ZmYwYmM5ZTRhZTFjMGNhY2Q"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="brc pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5682585.jpg?context=bWFzdGVyfHJvb3R8MTMzOTN8aW1hZ2UvanBlZ3xoNjQvaDBlLzk5MzU0OTk5NTIxNTguanBnfGIwYWFjYTBkMzVmZWZiMzMyOTEyOGU4MmJkOTUyNzhmMzBiYjg2NzVmNzMzYTYzMTEyYTBiMmIwZjgxZGM0ZTU"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="brc pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5675998.jpg?context=bWFzdGVyfHJvb3R8MTQ1ODh8aW1hZ2UvanBlZ3xoMjMvaGQ2Lzk5MzM2MzM3NDkwMjIuanBnfGY0YWUxZDM0YzE5ZjVlYTk3ZWJkMDg1YjM5YTVlMTZiNTA5ZDFkODFjNzA3ZGUxNTkwMTJmODA1YTQwYjhhOWE"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="brc pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5683452.jpg?context=bWFzdGVyfHJvb3R8MTQ0NTF8aW1hZ2UvanBlZ3xoMDEvaDU5Lzk5MzMyMDQxNjA1NDIuanBnfGE1ZjNiYTE3YjlkMWZlNzZiYjBjM2JlYWNiOTczYmE2NWM1YTM0ZjAyYzNiZmVkYTY2Y2EzMDlhZGE4ODNkYjk"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ring">
            <h3>更多戒指</h3>
            <ul class="ris pros">
                <li class="ri pro acShow">
                    <div class="proImg">
                        <img src="https://asset.swarovski.com.cn/images/$size_1200/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_360/5679698_png/hyperbola-%E4%B8%AA%E6%80%A7%E6%88%92%E6%8C%87--infinity--%E7%99%BD%E8%89%B2--%E9%95%80%E9%93%91-swarovski-5679698.png"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="ri pro acShow">
                    <div class="proImg">
                        <img src="https://asset.swarovski.com.cn/images/$size_1200/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_360/5677139_png/luna-%E5%BC%80%E5%8F%A3%E6%88%92%E6%8C%87--%E6%9C%88%E4%BA%AE--%E7%99%BD%E8%89%B2--%E9%95%80%E9%93%91-swarovski-5677139.png"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="ri pro acShow">
                    <div class="proImg">
                        <img src="https://asset.swarovski.com.cn/images/$size_1200/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_360/5647560_png/volta-%E4%B8%AA%E6%80%A7%E6%88%92%E6%8C%87--%E8%9D%B4%E8%9D%B6%E7%BB%93--%E7%99%BD%E8%89%B2--%E9%95%80%E9%93%91-swarovski-5647560.png"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="ri pro acShow">
                    <div class="proImg">
                        <img src="https://asset.swarovski.com.cn/images/$size_1200/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_360/5648292_png/matrix-%E4%B8%AA%E6%80%A7%E6%88%92%E6%8C%87--%E6%B7%B7%E5%90%88%E5%88%87%E5%89%B2--%E5%BF%83%E5%BD%A2--%E7%99%BD%E8%89%B2--%E9%95%80%E9%93%91-swarovski-5648292.png"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
            </ul>
        </div>

        <div class="decoration">
            <h3>更多装饰摆件</h3>
            <ul class="decs pros">
                <li class="dec pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5557537.jpg?context=bWFzdGVyfHJvb3R8MTUxMTN8aW1hZ2UvanBlZ3xoOTMvaGI5Lzk5MzQyMTY3NTcyNzguanBnfGZkM2FiZTcyZDQ4NDRhYTU3NTMyYWEzZTFhNzNjYTM0ODVkZjI2YjAxNzNjZDFlZWUzOTExMjk5NjM4M2EyZTU"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="dec pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5667298.jpg?context=bWFzdGVyfHJvb3R8MTk5NDd8aW1hZ2UvanBlZ3xoNmQvaDI3Lzk5Mjk3ODEwNTE0MjIuanBnfDZkYzk2YTMyOWY0YTNkMmMyNzViZWU2YWQ3MjYxZTk4M2YxN2EzYjk3ZTZmMDlmNWVhZDAwNjcxODg2OGYxZTA"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="dec pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5557797-var1.jpg?context=bWFzdGVyfHJvb3R8MjI3ODd8aW1hZ2UvanBlZ3xoOGMvaGFlLzk5MjI4NTg0ODM3NDIuanBnfGFiZjQyNmIzZjk3YTdkOTY3ZjUwMGY5NWU5ZDMxOTkyZmY4ZjAyMWNjMTU0ODdjMTZiYTMzOGM3YmM2ZjI2MWU"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
                    </div>
                </li>
                <li class="dec pro acShow">
                    <div class="proImg">
                        <img src="https://www.swarovski.com.cn/medias/5658442.jpg?context=bWFzdGVyfHJvb3R8MjczNTF8aW1hZ2UvanBlZ3xoYTcvaDhmLzk5MjI4NTg1NDkyNzguanBnfDIyNjUxMzlmNWNkNGMzZDM2Y2JhMDM2NjZiMzU2YzMxMGI0OTI3MmEzMTQxNTUzNjA2MzI4MTVlOTQ2Y2QzYmQ"
                            alt="">
                    </div>
                    <div class="proTitle">
                        <span>pro</span>
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

onMounted(() => {
    // 获取所有带有 acShow 类名的元素
    handleScroll()

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
    justify-content: center;

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

        margin-bottom: 6px;


        .proImg {
            width: 722px;
            height: 358px;
            overflow: hidden;

            img {
                width: 722px;
                height: 358px;
                transition: all .3s;
            }

            img:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
        }

        .proTitle {
            width: 722px;
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

                span {}


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

/* ring starts */
.ring {
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
