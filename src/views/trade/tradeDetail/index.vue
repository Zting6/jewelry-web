<template>
    <div class="outer">
        <Header></Header>
        <div class="main">
            <Order titleA="货物列表" titleB="购物车列表"></Order>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import Header from "@/components/header/static_header.vue"
import Order from "@/components/order/index.vue"


</script>
<style scoped>
.outer {
    background-color: rgb(240, 238, 228);
}

.main {
    width: 1500px;
    margin: 0 auto;
    margin-top: 20px;
    transform: rotateZ('angle');
}
</style>
