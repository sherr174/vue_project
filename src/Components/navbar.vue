<script setup lang="ts">

</script>

<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link>
    |
    <router-link :to="{name: 'multiplication_table'}">Multiplication Table</router-link>
    |
    <router-link :to="{name: 'about_me'}">About Me</router-link>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: center;
    gap: 15px;

    a {
      text-decoration: none;

      &.router-link-active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
</style>
