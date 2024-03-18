<template>
    <div class="header">
        <div class="top">
            <div class="topImg">
                <img class="actimg" :src=src alt="">
            </div>
            <div class="top_span">
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
                <span class="mainSpan">{{ router }}</span>
            </div>

        </div>



    </div>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps } from "vue"
const props = defineProps({
    src: {
        type: String,
        default: "https://asset.swarovski.com.cn/images/c_crop,g_xy_center,w_12001,h_4063,x_6001,y_6295/dpr_1.0,f_auto,q_auto,c_lfill,w_1920,h_519/swa-cms/2023_HOLIDAY_VISUAL_BODYP-2_OF_GL_72DPI_RGB/.jpg"
    },
    router: {
        type: String,
        default: "详情"
    }
});

const src = ref(props.src);
const router = ref(props.router);




</script>
<style scoped>
.top {

    position: relative;
}

.topImg {
    height: 520px;
    position: relative;
}

.top_span {
    position: absolute;
    bottom: 100px;
    left: 180px;
    color: white;


}

.mainSpan {
    font-size: 40px;
    color: black;
    margin-top: 20px;
}

.actimg {
    width: 100vw;
    /* height: 100vh; */
}
</style>
