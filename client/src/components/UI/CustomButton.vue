<template>
  <button :disabled="disabled || isLoading" type="button" class="button" @click="onClick">
    <custom-spinner v-if="isLoading"></custom-spinner>
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue'
import CustomSpinner from "@/components/UI/CustomSpinner.vue";

interface CustomButtonProps {
  disabled: boolean;
  isLoading: boolean;
}

defineProps<CustomButtonProps>()

const emit = defineEmits(['onClick'])
function onClick() {
  emit('onClick')
}
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 110px;
  margin: 20px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 14px;
  height: 36px;
  letter-spacing: 0.25px;
  line-height: 16px;
  padding: 9px 24px 11px 24px;
  background: #1f6ed5;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    background: #2e6dc1;
  }
  &:disabled {
    cursor: not-allowed;
    color: black;
    font-weight: bold;
    border: 1px grey solid;
    background: #ffffff;
  }

}
</style>
