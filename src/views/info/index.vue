<template>
    <div class="outer">
        <Header></Header>
        <div class="main">

        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import Header from "@/components/header/static_header.vue"


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
    padding: 10px 100px;
    transform: rotateZ('angle');
}
</style>
