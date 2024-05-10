<template>
    <div class="outer">
        <Header></Header>
        <div class="main">
            <Cart titleA="货物列表" titleB="购物车列表"></Cart>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import Header from "@/components/header/static_header.vue"
import Cart from "@/components/cart/cart.vue"


</script>
<style scoped>
.outer {
    background-color: rgb(240, 238, 228);
}

.main {
    width: 1500px;
    margin: 0 auto;
    margin-top: 20px;
}
</style>
