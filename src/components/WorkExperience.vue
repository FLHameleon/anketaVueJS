<template>
  <div>

    <label>{{ namePole }}:</label>

    <input type="checkBox">

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