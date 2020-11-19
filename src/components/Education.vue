<template>
  <div>

    <label>{{ namePole }}:</label>

    <select>
        <option v-for="vidEducation in vidsEducations">{{ vidEducation }}</option>
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
        vidsEducations: [
            'Высшее',
            'Неполное высшее',
            'Среднее',
            'Не полное среднее',
            'Образование отсутствует',
            'Другое'
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