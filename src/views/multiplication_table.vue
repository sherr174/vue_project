<script setup lang="ts"> // for Javascript //
import {ref} from 'vue';

let name = ref(null)
let rows = ref(12)
let cols = ref(12)
let to_highlight = ref(6)
let should_calculate = ref(true)
</script>

<template> <!-- Html Mark up would go here -->
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

    <label for="to_highlight">
      <span>Which row & column do you want to highlight?</span>
      <input type="number" id="to_highlight" v-model.number="to_highlight"/>
    </label>

    <label id="should_calculate">
      <span>Do you want to see the calculated values</span>
      <input type="checkbox" id="should_calculate" v-model="should_calculate"/>
    </label>

    <p v-if="name">Hi there <span v-html="name"/>, let's build our table</p>
    <p v-else>Hi there!</p>

    <!-- Vue conditional, IF name is SOMETHING then show 1st paragraph -->
    <p>You want {{rows}} rows</p>
    <p>You want {{cols}} columns</p>
    <p>Should we calculate the times table value? {{should_calculate}}</p>

    <table>
      <tr v-for="row in rows" :key="row" :class="{'highlighted' : row === to_highlight}">
       <td v-for="col in cols" :key="col" :class="{'highlighted' : col === to_highlight}">
         <template v-if="should_calculate === true">
           {{row * col}}
         </template>

         <template v-else>
           {{row}} * {{col}}
         </template>
       </td>
      </tr>
    </table>
  </div>
</template>

<style scoped> /* CSS code would go here, JUST THIS DOC */
div.inputs {
  max-width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    padding: 10px;
    border: 2px solid black;
    display: flex;
    gap: 15px;
  }

  table {
    border: 2px solid black;
    border-collapse: collapse;
    tr, td {
      padding: 4px;
      text-align: center;

      &.highlighted {
        background-color: yellow;
      }
    }
  }
}
</style>

