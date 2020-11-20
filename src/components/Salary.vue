<template>
  <div>

  <label>{{ dannieSalary.zagolovokSalary }}:</label>


<input type="range" :min="dannieSalary.minMoney" :max="dannieSalary.maxMoney" :step="dannieSalary.lengthStep" v-model="value"> 
<!-- <input type="number" v-model="value"/> -->
 
<span v-text="total"></span>

  </div>
</template>

<script>
// Если проверка истина то отправить message на главн форму

export default {
  props: [
    'dannieSalary'
  ],
  data() {
    return {
    value: this.dannieSalary.startZnah
    }
  },
  computed: {
      total: function () {
      return this.value
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