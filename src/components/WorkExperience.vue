<template>
  <div>

    <label v-bind:class="{done: (onSubmit())}">{{ startData.zagolovok }}:</label>

    <input type="checkBox" v-model="isEx">

  </div>
</template>

<script>
// Доделать взятие результата с кнопки
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'startData'
  ],
  data() {
    return {
      isEx: '123',
      rezult: {
        idName: ('' + this.startData.idName),
        message: false
      }
    }
  },
  methods: {
    onSubmit() {
      // console.log(this.isEx)
      var otpr = Object.assign({}, this.rezult);
      
      this.$emit('rezault', otpr)
      
      return false
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