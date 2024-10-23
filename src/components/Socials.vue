<template>
  <section>
    <a v-for="item of contacts" :key="item.name" :href="item.url" target="blank" :aria-label="item.name" :title="item.title">
      <component :is="getIcon(item.name)" width="40" height="40" aria-hidden />
    </a>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { type PropType } from 'vue';
import type { Contact } from '../data';

const { contacts } = defineProps({
  contacts: {
    type: Array as PropType<Contact[]>,
    required: true
  }
});

const getIcon = (name: string) => defineAsyncComponent(() => import(`../assets/icons/${name}.svg`));
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  margin: 0 12px;
  color: rgba(#ffffff, 0.5);
  text-decoration: none;
  outline-color: rgba(#ffffff, 0.7);

  &:hover {
    color: #ffffff;
  }

  &:active {
    color: #fff0d2;
  }
}
</style>
