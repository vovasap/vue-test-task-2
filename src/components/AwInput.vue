<template>
  <fieldset class="aw-input">
    <legend class="aw-input__label">{{ label }}</legend>
    <label>
      <input class="aw-input__input" :placeholder="placeholder" :type="type">
    </label>
  </fieldset>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.aw-input {
  border: none;

  &__label {
    font-family: $font-medium;
  }
  &__input {
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
  }
}
</style>