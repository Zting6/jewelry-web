<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/header/header.vue'
import SmallHeader from '@/components/header/smallHeader.vue'
import Footer from '@/components/footer.vue'

</script>

<template>
  <Header v-if="$route.meta.header" v-model:type='home'></Header>
  <SmallHeader v-if="$route.meta.small_header"></SmallHeader>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>
