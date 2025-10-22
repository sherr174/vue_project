<script setup>
</script>

<template>
  <section class="web_app_container">

    <header>
    <h1>Multiplication Table Project</h1>
      <h3>Create your own multiplication table with Vue!</h3>

      <nav>
        <router-link :to="{name: 'home'}">Home</router-link>
        |
        <router-link :to="{name: 'multiplication_table'}">Multiplication Table</router-link>
        |
        <router-link :to="{name: 'about_me'}">About Me</router-link>
      </nav>
    </header>

    <section class="page_content">
      <router-view/>
    </section>

    <footer class="page_content">
      <p>Created by Wil in Fall of 2025</p>
    </footer>

  </section>
</template>

<style scoped>
section.web_app_container {
  max-width: 80%;
  border: 1px solid;
  margin: 0 auto;

  header {
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
}
</style>
