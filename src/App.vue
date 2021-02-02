<template>
  <div class="registration-form">
   <div class="registration-form__header">
     <h1 class="registration-form__title">Регистрация</h1>
     <span class="registration-form__text">Уже есть аккаунт? <a href="#">Войти</a></span>
   </div>
    <form class="registration-form__form">
      <aw-input v-for="(data, index) in registrationData"
                v-model="data.value"
                :isValid.sync="data.isValid"
                @checkCompletedForm="checkCompletedForm"
                :label="data.label"
                :placeholder="data.placeholder"
                :validation-rule="data.validationRule"
                :key="index"/>
      <aw-select v-model="lang.value"
                 :label="lang.label"
                 :options-name="lang.optionsName"
                 :options="lang.languages"
                 :isValid.sync="lang.isValid"
                 @checkCompletedForm="checkCompletedForm"/>
      <aw-checkbox v-model="isAgreeToTerms">Принимаю <a class="link" href="#">условия</a> использования</aw-checkbox>
      <aw-button :disabled="!isCompletedForm || !isAgreeToTerms">Зарегистрироваться</aw-button>
    </form>
  </div>
</template>

<script>
import AwInput from "./components/AwInput.vue";
import AwButton from "./components/AwButton.vue";
import AwCheckbox from "./components/AwCheckbox.vue";
import AwSelect from "./components/AwSelect.vue";

export default {
  components: {
    AwInput, AwButton, AwCheckbox, AwSelect
  },
  created() {
    Object.keys(this.registrationData).forEach(item => {
      this.$set(this.registrationData[item], 'value', '')
      this.$set(this.registrationData[item], 'isValid', false)
    })
  },
  data() {
    return {
      registrationData: {
        name: {
          label: 'Имя',
          placeholder: 'Введите Ваше имя',
          validationRule: /^[-a-zA-ZЁёА-я\s]*$/,
        },
        email: {
          label: 'Email',
          placeholder: 'Введите Ваш email',
          validationRule: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        },
        phone: {
          label: 'Номер телефона',
          placeholder: 'Введите номер телефона',
          validationRule: /^(\+7|7|8)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
        },
      },
      lang: {
        label: 'Язык',
        placeholder: 'Язык',
        value: '',
        optionsName:"Язык",
        languages: ['Русский','Английский','Китайский','Испанский'],
        isValid: false
      },
      isAgreeToTerms: false,
      validationResults: [],
      isCompletedForm: false
    }
  },
  methods: {
    checkCompletedForm() {
      this.validationResults = []
      Object.keys(this.registrationData).forEach(item => {
        this.validationResults.push(this.registrationData[item].isValid)
      })
      this.validationResults.push(this.lang.isValid)
      this.isCompletedForm = !this.validationResults.includes(false)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";

.registration-form {
  width: 460px;
  margin: 0 auto;
  padding: 40px 30px;
  border-radius: 24px;
  background-color: #fff;
  &__header {
    margin-bottom: 58px;
  }
  &__title {
    margin: 0 0 8px;
    font-family: $font-bold;
    font-size: 34px;
    color: $text-color-dark;
  }
  &__text {
    color: $text-color-dark;
    & a {
      color: $accent;
      text-decoration: none;
    }
  }
  &__form {
   display: flex;
   flex-direction: column;
  }
}
.link {
  color: $accent;
  text-decoration: none;
}
</style>