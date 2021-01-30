<template>
  <fieldset class="aw-select">
    <legend class="aw-select__label">{{ label }}</legend>
      <button class="aw-select__button">Dropdown</button>
    <!--        <option v-if="optionsName" value="" selected disabled hidden>{{ optionsName }}</option>-->
    <!--        <option v-for="(option, index) in options" :class="{'selected': index===2}" value="" :key="index">{{ option }}</option>-->
  </fieldset>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    optionsName: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.aw-select {
  border: none;
  & select {
    //display: none;
  }
  &__label {
    font-family: $font-medium;
  }
  &__button {
    position: relative;
    height: 52px;
    padding: 3px 16px 0;
    font-size: 16px;
    border: 1px solid $secondary;
    border-radius: 6px;
    color: $text-color-dark;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 30px;
      background-image: url('../assets/images/select-arrow.svg');
    }
  }
}
.selected {
  background-color: $text-color-lighten;
}
</style>