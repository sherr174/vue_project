<template>
  <section class="web_app_container">

    <header>
      <h1>Multiplication Table Project</h1>
      <h3>Create your own multiplication table with Vue!</h3>
      <navbar/>
    </header>

    <section class="page_content">
      <router-view/>
    </section>

    <footer class="page_content">
      <navbar/>
      <p>Created by Wil in Fall of 2025</p>
    </footer>
  </section>
</template>

<style scoped>
section.web_app_container {
  max-width: 80%;
  border: 1px solid;
  margin: 0 auto;
}
  section.page_content {
    margin: 10px 0;
    background-color: lightgrey;
    padding: 20px;
  }
  footer {
    p {
      text-align: center;
    }
  }
</style>

<script setup>
import Navbar from "@/Components/navbar.vue";
</script>

