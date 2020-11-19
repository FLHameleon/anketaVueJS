<template>
  <div>

    <label  v-bind:class="{done: (/^[0-9]{7,10}$/.test(message))}">{{ namePole }}:</label>

    <select>
        <option v-for="kodCity in kodCities">{{ kodCity }}</option>
    </select>

    <input type="text" v-model="message">

  </div>
</template>

<script>
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'namePole'
  ],
  data() {
    return {
        message: '',
        kodCities: [
            '+38(071)',
            '+38(066)',
            '+7(044)',
            '+7(165)'
        ]
    }
  }
}


</script>

<style scoped>
  .done {
    color: #fff;
    background: green;
  }
</style>