<template>
  <div>

    <label v-bind:class="{done: (onSubmit() && (/^[А-Я][а-я]+$/.test(message)))}">{{ namePole }}:</label>

    <input type="text" v-model="message">

  </div>
</template>

<script>
// import Anketa from '/home/iai/workOcen3/19112020/0805/src/views/Anketa'
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'namePole'
  ],
  data() {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit() {
      if((/^[А-Я][а-я]+$/.test(this.message))) {
        this.$emit('rezault', this.message)
      } else this.$emit('rezault', false)

      return true
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