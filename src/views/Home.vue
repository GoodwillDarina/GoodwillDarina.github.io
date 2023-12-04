<template>
  <section>
    <img :src="PHOTO" alt="Это я, Дарья!" width="250" />
    <div v-html="TEXT" />
  </section>
</template>

<script setup lang="ts">
import { PHOTO, TEXT } from '../data';
</script>

<style lang="scss" scoped>
section {
  max-width: 788px;
  padding: 40px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgb(51 51 51 / 55%);
  border-radius: 24px;
  text-align: center;
}

img {
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

@media (min-width: 600px) {
  section {
    text-align: justify;
  }

  img {
    float: right;
    margin: 12px 0 12px 12px;
  }
}
</style>
