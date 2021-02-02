<template>
  <fieldset class="aw-input">
    <legend class="aw-input__label">{{ label }}</legend>
    <label>
      <input class="aw-input__input"
             :placeholder="placeholder"
             :type="type"
             @change="onInput"
             :value="value">
    </label>
    <p v-if="!isValid" class="aw-input__error">Введено некорректное значение</p>
  </fieldset>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    validationRule: {
      type: RegExp,
      default: () => (new RegExp)
    }
  },
  data() {
    return {
      value: '',
      validation: this.validationRule,
      isValid: true
    }
  },
  methods: {
    onInput(e) {
      this.value = e.target.value.trim()
      this.isValid = this.validation.test(this.value) && this.value !== ''
      this.$emit('input', this.value)
      this.$emit('update:isValid', this.isValid)
      this.$emit('checkCompletedForm')
    },
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.aw-input {
  position: relative;
  margin-bottom: 26px;
  padding-left: 0;
  padding-right: 0;
  border: none;

  &__label {
    font-family: $font-medium;
  }
  &__input {
    width: 100%;
    height: 52px;
    padding: 3px 16px 0;
    font-size: 16px;
    border: 1px solid $secondary;
    border-radius: 6px;
    color: $text-color-dark;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
    &::placeholder {
      color: $text-color-light;
    }
    &:focus {
      border: 2px solid $accent;
    }
  }
  &__error {
    position: absolute;
    bottom: -26px;
    left: 14px;
    margin: 8px 0;
    font-size: 14px;
    color: $text-color-error;
  }
}
</style>