<script setup>
import portfolio_data from '@/data/portfolio.json'
</script>

<template>
<h1>My Portfolio :P</h1>

  <div class="container">
    <div class="preview_card" v-for="portfolio_item in portfolio_data" :key="portfolio_item.id">
      <img :src="portfolio_item.thumbnail" alt="image_goes_here_dummy"/>
      <div>{{ portfolio_item.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  .preview_card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid black;
    padding: 10px;
  }
}
</style>
