<template>
  <label class="aw-checkbox">
    <input class="aw-checkbox__input" type="checkbox" :value="value" @input="toggle" :checked="checked">
    <span class="aw-checkbox__label">
      <slot/>
    </span>
    <span class="aw-checkbox__mark"></span>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
  },
  created() {
    if (this.checked) {
      this.$emit('input', true)
    }
  },
  data() {
    return {
      value: this.checked
    }
  },
  methods: {
    toggle() {
      this.value = !this.value
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.aw-checkbox {
  position: relative;
  margin-bottom: 34px;
  padding-left: 35px;
  font-family: $font-medium;
  cursor: pointer;
  user-select: none;
  &__input {
    display: none;
  }
  &__label{
    margin: 0;
    line-height: 28px;
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