<template>
  <fieldset class="aw-select">
    <legend class="aw-select__label">{{ label }}</legend>
     <div class="aw-select__dropdown">
       <button class="aw-select__button" :class="{'active': isActive}" type="button" @click="">{{ name }}</button>
       <div class="aw-select__options" :class="{'hidden': !isActive}">
         <div v-for="(option, index) in optionsItems" class="aw-select__option" :class="{'active': option.isSelected}" @click="selectOption(index)" :key="index">
           <p>{{ option.name }}</p>
         </div>
       </div>
     </div>
  </fieldset>
</template>

<script>
export default {
  model: {
    prop: 'name',
    event: 'input'
  },
  props: {
    label: {
      type: String,
      required: true,
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
  },
  created() {
    this.options.forEach((option, index) => {
      this.optionsItems[index] = {
        name: option,
        isSelected: false
      }
    })
    document.addEventListener('click', this.toggle)
  },
  data() {
    return {
      optionsItems: {},
      name: this.optionsName,
      isActive: false,
      isValid: true
    }
  },
  methods: {
    toggle(e) {
      if (!!e.target.closest('.aw-select__button')) {
        this.isActive = !this.isActive
      } else if (this.isActive) {
        this.isActive = false
      }
    },
    selectOption(index) {
      this.name = this.optionsItems[index].name

      for(const optionItem in this.optionsItems) {
        this.optionsItems[optionItem].isSelected = false
      }
      this.optionsItems[index].isSelected = true
      this.$emit('input', this.options[index])

      this.isValid = this.name !== this.optionsName
      this.$emit('update:isValid', this.isValid)
      this.$emit('checkCompletedForm')
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.aw-select {
  margin: 0 0 26px;
  border: none;
  padding-left: 0;
  padding-right: 0;

  &__label {
    font-family: $font-medium;
  }
  &__dropdown {
    position: relative;
  }
  &__button {
    width: 100%;
    height: 52px;
    padding: 3px 46px 0 16px;
    text-align: left;
    font-size: 16px;
    border: 1px solid $secondary;
    border-radius: 6px;
    color: $text-color-dark;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
    &:active {
      border: 2px solid $accent;
    }
    &.active {
      border: 2px solid $accent;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -5px;
      width: 30px;
      height: 30px;
      transform: translate(-50%, -50%);
      background-image: url('../assets/images/select-arrow.svg');
    }
  }
  &__options {
    position: absolute;
    width: 100%;
    margin-top: 4px;
    z-index: 999;
    border: 1px solid $secondary;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04), 0 20px 20px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    cursor: pointer;
    &.hidden {
      display: none;
    }
  }
  &__option {
    display: flex;
    align-items: center;
    height: 44px;
    padding-left: 16px;
    color: $text-color;
    &.active {
      background-color: $text-color-lighten;
    }
    &:first-child{
      margin-top: 12px;
    }
    &:last-child {
      margin-bottom: 12px;
    }
  }
}
.selected {
  background-color: $text-color-lighten;
}
</style>