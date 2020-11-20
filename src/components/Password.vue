<template>
  <div>
    <p>
    <label v-bind:class="{done: validaciaPassword(message[0], message[1])}">{{ dataPassword.zagolovokPoly1 }}:</label>
    <input type="password" v-model="message[0]"></p>


    <p>
    <label v-bind:class="{done: validaciaPassword(message[1], message[0])}">{{ dataPassword.zagolovokPoly2 }}:</label>      
    <input type="password" v-model="message[1]"></p>

  <h3>{{message[0]}}</h3>
  <h3>{{message[1]}}</h3>

  </div>
</template>

<script>
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'dataPassword'
  ],
  data() {
    return {
      message: ['', '']
    }
  },
  methods: {
    validaciaPassword(psswrd, psswrd2) {
      if((/^([А-Я]|[а-я]|[A-Z]|[a-z]|[0-9]){5,}$/.test(psswrd)) && (psswrd == psswrd2))
      return true
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