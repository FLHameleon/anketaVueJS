<template>
  <div>

    <form class="textPoleRu">

    <p>От: Главное управление статистики ДНР</p>

    <dannieText :startData="dannieToWhom" @rezault="rezultAnket"/>
    <dannieText :startData="dannieFromWhom" @rezault="rezultAnket"/>

    <p>Главное управление статистики Донецкой Народной Республики  зарегистрировало Вашу заявку о возможности предоставления форм отчётности в электронном виде.</p>

    <dannieDate :startData="dateOfApplication" @rezault="rezultAnket"/>
    <dannieDate :startData="DateOfChangeOfPersonalAccountData" @rezault="rezultAnket"/>
    <dannieDate :startData="DateOfDeletionOfPersonalAccount" @rezault="rezultAnket"/>


    <dannieNumber :startData="numberApplicationRegistration" @rezault="rezultAnket"/>
    <p></p>
    <p>По возникающим вопросам можно обратиться</p>
    <dannieEmail :startData="emailSupport" @rezault="rezultAnket"/>
    <danniePhone :startData="phoneSupport" @rezault="rezultAnket"/>

    <button v-if="!isNeAktiv" @click.prevent="messAnket" disabled>Отправить</button>
    <button v-else @click.prevent="messAnket">Отправить</button>

    <hr>

    </form>
   
    <router-link to="/">Назад</router-link>
    
  </div>
</template>

<script>
// dateOfApplication
import dannieText from '/home/iai/workOcen3/24112020/0805/src/components/dannieText'
import dannieDate from '/home/iai/workOcen3/24112020/0805/src/components/dannieDate'
import dannieNumber from '/home/iai/workOcen3/24112020/0805/src/components/dannieNumber'
import dannieEmail from '/home/iai/workOcen3/24112020/0805/src/components/dannieEmail'
import danniePhone from '/home/iai/workOcen3/24112020/0805/src/components/danniePhone'

export default {
  name: 'app',
  data() {
    return {
      isNeAktiv: true,
      sborkaUser: {},
      dannieToWhom: {
        idName: 'dannieToWhom',
        zagolovok: 'Кому: '
      },

      dannieFromWhom: {
        idName: 'dannieFromWhom',
        zagolovok: 'В лице '
      },

      dateOfApplication: {
        idName: 'dateOfApplication',
        zagolovok: 'Дата заявки: '
      },
      
      DateOfChangeOfPersonalAccountData: {
        idName: 'DateOfChangeOfPersonalAccountData',
        zagolovok: 'Дата изменения данных личного кабинета: '
      },
      
      DateOfDeletionOfPersonalAccount: {
        idName: 'DateOfDeletionOfPersonalAccount',
        zagolovok: 'Дата удаления личного кабинета: '
      },

      numberApplicationRegistration: {
        idName: 'numberApplicationRegistration',
        zagolovok: 'Регистрационный № заявки: '
      },

      emailSupport: {
        idName: 'emailSupport',
        zagolovok: 'e-mail службы поддержки: '
      },

      phoneSupport: {
        idName: 'phoneSupport',
        zagolovok: 'Телефон службы поддержки: '
      }
    }
  },

  methods: {
      rezultAnket(todo) {
        this.sborkaUser[todo.idName] = todo.message

        this.isNeAktiv = true
        for (let key in this.sborkaUser) {
          if(this.sborkaUser[key] == '') {
            this.isNeAktiv = false 
            break
          }
        }

      },
      messAnket() {

        console.log(this.sborkaUser)

      }
     
    },

  components: {
    dannieText, dannieDate, dannieNumber, dannieEmail, danniePhone
  }
}
</script>

<style scoped>

.textPoleRu {
    text-align:left;
    width: 600px;
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