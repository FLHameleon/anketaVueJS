<template>
  <div>

    <label v-bind:class="{done: (/^[А-Я][а-я]+$/.test(message))}">{{ namePole }}:</label>

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
      message: ''
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