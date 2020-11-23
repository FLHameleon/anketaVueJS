<template>
  <div>
    <form class="textPoleRu">

    <FIO :startData="dannieName" @rezault="rezultAnket"/>
    <FIO :startData="dannieSurname" @rezault="rezultAnket"/>
    <FIO :startData="dannieMiddleName" @rezault="rezultAnket"/>
    <Pol :startData="danniePol" @rezault="rezultAnket"/>
    <Phone :startData="danniePhone" @rezault="rezultAnket"/>
    <DateOfBirth :startData="dannieDateOfBirth" @rezault="rezultAnket"/>
    <Education :startData="dannieEducation" @rezault="rezultAnket"/>
    <WorkExperience :startData="dannieWorkExperience" @rezault="rezultAnket"/>
    <Salary :startData="dannieSalary" @rezault="rezultAnket"/>
    <Email :startData="dannieEmail" @rezault="rezultAnket"/>
    <Password :startData="danniePassword" @rezault="rezultAnket"/>

    <button @click.prevent="messAnket">Отправить</button>

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
      sborkaUser : {},
      dannieName: {
        idName: 'dannieName',
        zagolovok: 'Имя'
      },
      dannieSurname: {
        idName: 'dannieSurname',
        zagolovok: 'Фамилия'
      },
      dannieMiddleName: {
        idName: 'dannieMiddleName',
        zagolovok: 'Отчество'
      },

      danniePol: {
        idName: 'danniePol',
        zagolovok: 'Пол'
      },

      danniePhone: {
        idName: 'danniePhone',
        zagolovok: 'Телефон'
      },

      dannieDateOfBirth: {
        idName: 'dannieDateOfBirth',
        zagolovok: 'Дата рождения'
      },

      dannieEducation: {
        idName: 'dannieEducation',
        zagolovok: 'Образование'
      },

      dannieWorkExperience: {
        idName: 'dannieWorkExperience',
        zagolovok: 'Имеется ли опыт работы'
      },

      dannieSalary: {
        idName: 'dannieSalary',
        zagolovok: 'Заработная плата',
        startZnah: 20500,
        minMoney: 10000,
        maxMoney: 50000,
        lengthStep: 1000
      },

      dannieEmail: {
        idName: 'dannieEmail',
        zagolovok: 'Электронная почта'
      },

      danniePassword: {
        idName: 'danniePassword',
        zagolovok: {
          zagolovokPoly1:'Пароль', 
          zagolovokPoly2:'Введите пароль'
        }
      }
    }
  },
  methods: {
    rezultAnket(todo) {
    
      this.sborkaUser[todo.idName] = todo.message
  
    },
    messAnket() {
      console.log(this.sborkaUser)      
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