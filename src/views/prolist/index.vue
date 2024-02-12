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




    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
const actImgs = ref([
    "https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_12001,h_4063,x_6001,y_6295/dpr_1.0,f_auto,q_auto,c_lfill,w_1920,h_519/swa-cms/2023_HOLIDAY_VISUAL_BODYP-2_OF_GL_72DPI_RGB/.jpg"
])




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
</style>
