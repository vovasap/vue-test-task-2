<template>
  <div class="registration-form">
<!--    <h1 class="registration-form__title">Регистрация</h1>-->
<!--    <span>Уже есть аккаунт? <a href="#">Войти</a></span>-->
    <form class="registration-form__form">
      <aw-input label="Label" placeholder="Placeholder"/>
      <aw-button>Button</aw-button>
      <aw-checkbox v-model="isAgreeToTerms">Принимаю <a class="link" href="#">условия</a> использования</aw-checkbox>
      <br><br><br>
      <aw-select v-model="registrationData.lang" label="Язык" options-name="Язык" :options="languages"/>



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
  data() {
    return {
      languages: ['Русский','Английский','Китайский','Испанский'],
      registrationData: {
        lang: '',
      },
      isAgreeToTerms: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";

.registration-form {
  max-width: 460px;
  margin: 0 auto;

  border-radius: 24px;

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