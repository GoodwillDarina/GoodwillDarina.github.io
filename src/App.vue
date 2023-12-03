<template>
  <Header></Header>
  <main>
    <transition name="fade" appear>
      <router-view />
    </transition>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss">
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
