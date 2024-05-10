<template>
    <div class="outer">
        <Header></Header>
        <div class="main">
            <Orders title="订单列表"></Orders>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import Header from "@/components/header/static_header.vue"
import Orders from "@/components/orders/orders.vue"


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
