<template>
  <section>
    <Preview v-for="item of articles" :key="item.id" class="article" :title="item.title" :link="item.link" :preview="item.preview" />
  </section>
</template>

<script setup lang="ts">
import Preview from '../components/Preview.vue';
import { articles } from '../data';
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 12px;
  margin: 0 auto;
}

.article {
  width: 100%;
  margin: 0 0 20px;
}
</style>
