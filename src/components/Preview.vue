<template>
  <article>
    <a :href="link" target="_blank">
      <img v-if="preview" :src="preview" alt="" loading="lazy" aria-hidden width="300" height="200" />
      <slot></slot>
      <p>{{ title }}</p>
    </a>
  </article>
</template>

<script setup lang="ts">
type Preview = {
  title: string;
  link: string;
  preview?: string;
};

defineProps<Preview>();
</script>

<style lang="scss" scoped>
article {
  padding: 12px;
  box-sizing: border-box;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgb(51 51 51 / 55%);
  border-radius: 12px;
}

a {
  display: inline-block;
  margin: 0;
  font-size: 1em;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  outline-color: #ffffff;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  &:active {
    color: #fcc048;
    text-decoration: underline;
  }
}

img {
  width: 100%;
  height: calc(9 / 16 * 100%);
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
</style>
