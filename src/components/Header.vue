<template>
  <header>
    <router-link to="/">
      <img src="../assets/name.png" width="600" alt="Daria Saburova" />
    </router-link>
    <nav>
      <router-link to="/articles" active-class="active">Мои статьи</router-link>
      <router-link to="/videos" active-class="active">Мои доклады</router-link>
      <a href="https://t.me/notebook_frontender" target="_blank">
        Блокнотик фронтендера
        <LinkSvg width="20" height="20" aria-hidden />
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import LinkSvg from '../assets/icons/link.svg';
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

img {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 16px auto;
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;

  a {
    gap: 4px;
    margin: 0 12px;
  }
}

a {
  display: inline-flex;
  align-items: center;
  color: rgba(#ffffff, 0.7);
  text-decoration: none;
  outline-color: rgba(#ffffff, 0.7);

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  &:active {
    color: #fff0d2;
    text-decoration: underline;
  }

  &.active {
    color: #fff0d2;
    text-decoration: underline;
  }

  svg {
    color: currentColor;
  }

  @media (min-width: 600px) {
    margin: 0 24px;
  }
}
</style>
