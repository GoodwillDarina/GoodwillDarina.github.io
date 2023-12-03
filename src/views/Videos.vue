<template>
  <section>
    <Preview v-for="item of videos" :key="item.id" class="video" :title="item.title" :link="item.link" :preview="item.preview" />
  </section>
</template>

<script setup lang="ts">
import Preview from '../components/Preview.vue';
import { videos } from '../data';
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 12px;
  margin: 0 auto;
}

.video {
  width: 100%;
  margin: 0 0 20px;
}
</style>
