<script setup lang="ts">
import my_button from "@/Components/my_button.vue";
</script>

<template>
  <nav>
    <my_button link_text="Home" route_name="home" theme="primary"/>
    <my_button link_text="Multiplication Table" route_name="multiplication_table"/>
    <my_button link_text="About Me" route_name="about_me"/>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;

    a {
      text-decoration: none;

      &.router-link-active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
</style>
