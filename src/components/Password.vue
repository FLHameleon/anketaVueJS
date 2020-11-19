<template>
  <div>

    <label v-bind:class="{done: (/^([А-Я]|[а-я]|[A-Z]|[a-z]|[0-9]){5,}$/.test(message))}">{{ namePole }}:</label>

    <input type="password" v-model="message">
    <input type="password">

  </div>
</template>

<script>
// Доделать
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