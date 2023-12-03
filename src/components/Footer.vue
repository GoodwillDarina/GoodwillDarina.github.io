<template>
  <footer>
    <Socials :contacts="contacts" />
    <div>© Goodwill Darina, {{ currentYear }}</div>
  </footer>
</template>

<script setup lang="ts">
import Socials from './Socials.vue';
import { contacts } from '../data';

const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  color: rgba(#fff, 0.5);

  div {
    margin: 16px auto;
    text-align: center;
  }

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      margin: 16px 12px;
    }
  }
}
</style>
