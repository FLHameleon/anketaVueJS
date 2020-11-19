<template>
  <div>

    <label>{{ namePole }}:
    <input type="range" min="10000" max="50000" step="1000" value="25000"/></label>
    <label>{{startZnah}}</label>

  </div>
</template>

<script>
//Доделать
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'namePole'
  ],
  data() {
    return {
      message: '',
      minMoney: 10000,
      maxMoney: 50000,
      startZnah: 25000,
      lengthStep: 1000
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