<script setup>
const props = defineProps({
  link_text: {
    type: String,
    required: true,
    default: 'My Button'
  },
  route_name: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: false,
    default: 'secondary'
  }
})
</script>

<template>
  <router-link :to="{name: props.route_name}" :class="props.theme">{{props.link_text}}</router-link>
</template>

<style scoped>
  a {
    border: 1px solid black;
    padding: 4px;
    background-color: lemonchiffon;
    color: rebeccapurple;
    border-radius: 4px;

    &:hover {
      background-color: rebeccapurple;
      color: lemonchiffon;
    }

    &.primary {
      font-size: 125%;
      padding: 15px;
    }
  }
</style>


