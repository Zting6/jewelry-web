<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/header.vue'
import HeaderUnHome from '@/components/header_unhome.vue'
import SmallHeader from '@/components/smallHeader.vue'
import Footer from '@/components/footer.vue'

</script>

<template>
  <Header v-if="$route.meta.header"></Header>
  <HeaderUnHome v-if="$route.meta.header_unhome"></HeaderUnHome>
  <SmallHeader v-if="$route.meta.small_header"></SmallHeader>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>
