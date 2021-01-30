<template>
  <label class="aw-checkbox">
    <input class="aw-checkbox__input" type="checkbox" @click="onClick">
    <slot></slot>
    <span class="aw-checkbox__mark checked"></span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      //
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.aw-checkbox {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  user-select: none;
  & input {
    display: none;
  }
  &__input {

  }
  &__mark {
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    border: 1px solid $secondary;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
    background-color: #fff;
    &:hover {
      background-color: #fbfbfb;
    }
  }
  & input:checked ~ .aw-checkbox__mark {
    border: 2px solid $accent;
    background-image: url('../assets/images/checkbox-mark.svg');
  }
}

</style>