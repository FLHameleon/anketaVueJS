<template>
  <div>

    <label  v-bind:class="{done: (/^([А-Я]|[а-я]|[A-Z]|[a-z]|[0-9]){5,}$/.test(message))}">{{ namePole }}:</label>

    <input type="text" v-model="message">

    <select>
        <option v-for="vidMail in vidsMails">{{ vidMail }}</option>
    </select>


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
        vidsMails: [
            '@mail.ru',
            '@inbox.ru',
            '@list.ru',
            '@bk.ru',
            '@yandex.ru',
            '@gmail.com',
            'Other'
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