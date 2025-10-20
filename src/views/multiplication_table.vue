<script setup lang="ts"> // for Javascript //
import {ref} from 'vue';

let name = ref(null)
let rows = ref(12)
let cols = ref(12)
</script>

<template> <!-- Html Mark up would go here -->
  <h1>Hello world!</h1>
  <p>My multiplication table will live here</p>

  <div class="inputs">
    <label for="name">
      <span>What's your name:</span>
      <input id="name" v-model="name"/>
    </label>

    <label for="rows">
      <span>Rows</span>
      <input type="number" id="rows" v-model.number="rows"/>
    </label>

    <label for="cols">
      <span>Cols</span>
      <input type="number" id="cols" v-model.number="cols"/>
    </label>

    <p v-if="name">Hi there <span v-html="name"/>, let's build our table</p>
    <p v-else>Hi there!</p>

    <!-- Vue conditional, IF name is SOMETHING then show 1st paragraph -->
    <p>How many rows do I have? {{rows}}</p>
    <p>How many cols do I have? {{cols}}</p>
  </div>
</template>

<style scoped> /* CSS code would go here, JUST THIS DOC */
div.inputs {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    padding: 10px;
    border: 1px solid red;
    display: flex;
    gap: 15px;
  }
}
</style>

