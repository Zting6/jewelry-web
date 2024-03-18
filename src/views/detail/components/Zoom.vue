<template>
    <div class="spec-preview">
        <img v-if="isGetImg" :src="imgurl" />
        <div v-else class="loading-text">加载中...</div>
        <div class="event" @mousemove="mouseMove" ref="small"></div>
        <!-- 大图展示 -->
        <div class="big" ref="big">
            <img :src="imgurl" ref="bigImg" />
        </div>
        <!-- 遮罩层 -->
        <div class="mask" ref="mask"></div>
    </div>
</template>

<script>
import { ref } from 'vue';


export default {
    name: 'Zoom',
    props: ['imgurl'],
    setup(props) {
        const isGetImg = ref(true);
        const getimgs = ref({});

        const small = ref(null);
        const bigImg = ref(null);
        const mask = ref(null);
        const big = ref(null);

        const mouseMove = (event) => {
            try {
                let maskX = event.offsetX - mask.value.clientWidth / 2;
                let maskY = event.offsetY - mask.value.clientHeight / 2;
                if (maskX <= 0) {
                    maskX = 0;
                } else if (maskX >= small.value.clientWidth - mask.value.clientWidth) {
                    maskX = small.value.clientWidth - mask.value.clientWidth;
                }

                if (maskY <= 0) {
                    maskY = 0;
                } else if (maskY >= small.value.clientHeight - mask.value.clientHeight) {
                    maskY = small.value.clientHeight - mask.value.clientHeight;
                }
                mask.value.style.left = maskX + "px";
                mask.value.style.top = maskY + "px";
                //移动大图位置
                bigImg.value.style.left = -1 * maskX * 2 + "px";
                bigImg.value.style.top = -1 * maskY * 2 + "px";

                moveZoomedImage(maskX, maskY);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const moveZoomedImage = (maskX, maskY) => {
            try {
                let maskWidth = mask.value.clientWidth;
                let maskHeight = mask.value.clientHeight;

                let zoomedWidth = bigImg.value.clientWidth;
                let zoomedHeight = bigImg.value.clientHeight;

                // 获取小图容器的宽度和高度
                let smallWidth = small.value.clientWidth;
                let smallHeight = small.value.clientHeight;

                // 计算放大图容器的位置
                let left = smallWidth + 10; // 小图容器的右侧边界
                let top = 0; // 使放大图容器紧贴小图容器顶部

                // 如果放大图像的高度大于小图像的高度，则调整放大图像容器的位置以保持底部对齐
                if (zoomedHeight > smallHeight) {
                    top = smallHeight - zoomedHeight;
                }

                top = 0;
                // 设置放大图容器的位置
                big.value.style.left = left + "px";
                big.value.style.top = top + "px";
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };








        // 在挂载后执行的逻辑
        const mounted = () => {
            //轮播图当中的图片显示被改变了,放大镜也改变
            // this.$bus.$on("changeDefaultIndex", this.changeDefaultIndex);
            // this.moveZoomedImage(0, 0);
        };

        return {
            isGetImg,
            getimgs,
            small,
            bigImg,
            mask,
            big,
            mouseMove,
            moveZoomedImage,
            mounted
        };
    }
};
</script>

<style scoped>
.spec-preview {
    position: relative;
    width: 500px;
    height: 500px;
    border: 1px solid #ccc;

    img {
        width: 100%;
        height: 100%;
    }

    .event {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 998;
    }

    .mask {
        width: 50%;
        height: 50%;
        background-color: rgba(240, 238, 228, .6);
        position: absolute;
        left: 0;
        top: 0;
        display: none;
    }

    .big {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -1px;
        left: 100%;
        border: 1px solid #aaa;
        overflow: hidden;
        z-index: 998;
        display: none;
        background: white;

        img {
            width: 200%;
            max-width: 200%;
            height: 200%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    .event:hover~.mask,
    .event:hover~.big {
        display: block;
    }

    .loading-text {
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
        margin: 190px 60px;
    }
}
</style>