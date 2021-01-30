<template>
  <div class="registration-form">
<!--    <h1 class="registration-form__title">Регистрация</h1>-->
<!--    <span>Уже есть аккаунт? <a href="#">Войти</a></span>-->
    <form class="registration-form__form">
      <aw-input label="Label" placeholder="Placeholder"/>
      <aw-button>Button</aw-button>
      <aw-checkbox>checkbox</aw-checkbox>
      <aw-select label="Label" :options="[1,2,3,4]">Dropdown</aw-select>



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
  }
}
</script>

<style scoped lang="scss">

.registration-form {
  width: 460px;
  margin: 0 auto;

  border-radius: 24px;

&__form {
   display: flex;
   flex-direction: column;
 }
}
</style>