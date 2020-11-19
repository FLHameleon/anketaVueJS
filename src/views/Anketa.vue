<template>
  <div>
    <form class="textPoleRu">

    <FIO v-bind:namePole="poleName"/>
    <FIO v-bind:namePole="poleSurname"/>
    <FIO v-bind:namePole="poleMiddleName"/>
    <Pol v-bind:namePole="polePol"/>
    <Phone v-bind:namePole="polePhone"/>
    <DateOfBirth v-bind:namePole="poleDateOfBirth"/>
    <Education v-bind:namePole="poleEducation"/>
    <WorkExperience v-bind:namePole="poleWorkExperience"/>
    <Salary v-bind:namePole="poleSalary"/>
    <Email v-bind:namePole="poleEmail"/>
    <Password v-bind:namePole="polePassword"/>

    <router-link to="/">Назад</router-link>
    <hr>
 

    </form>

    
  </div>
</template>

<script>

import FIO from '/home/iai/workOcen3/19112020/0805/src/components/FIO'
import Pol from '/home/iai/workOcen3/19112020/0805/src/components/Pol'
import Phone from '/home/iai/workOcen3/19112020/0805/src/components/Phone'
import DateOfBirth from '/home/iai/workOcen3/19112020/0805/src/components/DateOfBirth'
import Education from '/home/iai/workOcen3/19112020/0805/src/components/Education'
import WorkExperience from '/home/iai/workOcen3/19112020/0805/src/components/WorkExperience'
import Salary from '/home/iai/workOcen3/19112020/0805/src/components/Salary'
import Email from '/home/iai/workOcen3/19112020/0805/src/components/Email'
import Password from '/home/iai/workOcen3/19112020/0805/src/components/Password'

export default {
  name: 'app',
  data() {
    return {
      poleName: 'Имя',
      poleSurname: 'Фамилия',
      poleMiddleName: 'Отчество',
      polePol: 'Пол',
      polePhone: 'Телефон',
      poleDateOfBirth: 'Дата рождения',
      poleEducation: 'Образование',
      poleWorkExperience: 'Имеется ли опыт работы',
      poleSalary: 'Заработная плата',
      poleEmail: 'Электронная почта',
      polePassword: 'Пароль'
    }
  },
  components: {
    FIO, Pol, Phone, DateOfBirth, Education, WorkExperience, Salary, Email, Password
  }
}
</script>

<style scoped>
.textPoleRu {
    text-align:right;
    float:left
}

.elemData {
    float: right;
}

label {
    float:left;
}

.anketList {
    float:left
}
</style>