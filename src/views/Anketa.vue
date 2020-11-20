<template>
  <div>
    <form class="textPoleRu">

    <FIO :namePole="poleName" @rezault="addTodo1"/>
    <FIO :namePole="poleSurname" @rezault="addTodo2"/>
    <FIO :namePole="poleMiddleName" @rezault="addTodo3"/>
    <Pol :namePole="polePol" @rezault="addTodo4"/>
    <Phone :namePole="polePhone" @rezault="addTodo5"/>
    <DateOfBirth :namePole="poleDateOfBirth"/>
    <Education :namePole="poleEducation"/>
    <WorkExperience :namePole="poleWorkExperience"/>
    <Salary :dannieSalary="dannieSalary"/>
    <Email :namePole="poleEmail"/>
    <Password :dataPassword="dataPassword"/>

    <button @click.prevent="rezultAnker">Отправить</button>

    <router-link to="/">Назад</router-link>
    <hr>

    <p>{{vihodnDannie.messegeName}}</p>

    <p>{{typeof(vihodnDannie.messegeName)}}</p>
 
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
      vihodnDannie: {
        messegeName: '',
        messegeSurname: '',
        messegeMiddleName: '',
        messegePol: '',
        messegePhone: '',

        messegeDateOfBirth: '',
        messegeEducation: '',
        messegeWorkExperience: '',
        messegeSalary: '',
        messegeEmail: '',
        messegePassword: ''
      },


      poleName: 'Имя',
      poleSurname: 'Фамилия',
      poleMiddleName: 'Отчество',
      polePol: 'Пол',
      polePhone: 'Телефон',
      poleDateOfBirth: 'Дата рождения',
      poleEducation: 'Образование',
      poleWorkExperience: 'Имеется ли опыт работы',
      dannieSalary: {
        zagolovokSalary: 'Заработная плата',
        startZnah: 20500,
        minMoney: 10000,
        maxMoney: 50000,
        lengthStep: 1000
      },
      poleEmail: 'Электронная почта',
      dataPassword: {
        zagolovokPoly1:'Пароль', 
        zagolovokPoly2:'Введите пароль'
        }
    }
  },
  methods: {
    addTodo1(todo) {
      this.vihodnDannie.messegeName = todo
    },
    addTodo2(todo) {
      this.vihodnDannie.messegeSurname = todo
    },
    addTodo3(todo) {
      this.vihodnDannie.messegeMiddleName = todo
    },
    addTodo4(todo) {
      this.vihodnDannie.messegePol = todo
    },
    addTodo5(todo) {
      this.vihodnDannie.messegePhone = todo
    },
    rezultAnker() {
      console.log(this.vihodnDannie)
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