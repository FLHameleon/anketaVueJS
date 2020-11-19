<template>
  <div>

    <label>{{ namePole }}:</label>

    <input type="date" value="1988-07-05" min="1950-01-01" max="2020-09-01" />

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