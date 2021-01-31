<template>
  <button class="aw-button" :class="{'aw-button_disabled': disabled}" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.aw-button {
  height: 56px;
  padding: 0 65px;
  border: none;
  border-radius: 6px;
  font-family: $font-medium;
  font-size: 16px;
  color: $text-color-lighten;
  background-color: $accent;
  box-shadow: 0 2px 4px rgba(44, 39, 56, 0.08), 0 4px 8px rgba(44, 39, 56, 0.08);
  &:hover {
    box-shadow: 0 12px 24px rgba(44, 39, 56, 0.08), 0 24px 48px rgba(44, 39, 56, 0.16);
  }
  &:active {
    border: 2px solid rgba(44, 39, 56, 0.86);
    box-shadow: 0 2px 4px rgba(44, 39, 56, 0.0001), 0 4px 8px rgba(44, 39, 56, 0.08);
  }
  &_disabled {
    color: $text-color-light;
    background-color: $secondary;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.08);
    &:hover {
      box-shadow: 0 4px 8px rgba(44, 39, 56, 0.08);
    }
  }
}
</style>