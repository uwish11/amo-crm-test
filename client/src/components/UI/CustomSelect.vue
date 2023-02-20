<template>
  <div class="select" >
    <div
      class="select__input"
      :class="{ 'select__input--disabled': props.disabled }"
      @click="changeStateList"
    >
      {{ props.currentValue.value }}
      <img
        class="select__icon"
        :class="{ 'select__icon--down' : opened }"
        :src="chevron"
        alt="chevron-icon"/>
    </div>
    <div v-if="opened" class="select__list">
      <div
        v-for="item in props.items"
        :key="item.id"
        class="select__item"
        @click="selectItem(item)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, defineEmits} from "vue";
import chevron from "@/assets/icons/chevron.svg"

interface CustomSelectProps {
  items: {id: number, value: string}[],
  currentValue: {id: number, value: string},
  disabled: boolean
}

const props = defineProps<CustomSelectProps>()

const emit = defineEmits(['onChange'])

const opened = ref(false)

function changeStateList() {
  if (!props.disabled) {
    opened.value = !opened.value
  }
}
function selectItem(item: {id: number, value: string}) {
  emit('onChange', item.id)
  changeStateList()
}
</script>

<style scoped lang="scss">
.select {
  position: relative;
  &__input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid grey;
    border-radius: 2px;
    background: #ffffff;
    cursor: pointer;
    padding: 4px 10px;

    &--disabled {
      cursor: default;
      background: #c0c0c0;
    }
  }
  &__icon {
    width: 20px;
    height: 20px;
    &--down {
      transform: rotate(90deg);
    }
  }
  &__list {
    position: absolute;
    max-width: 400px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 3px;
  }
  &__item {
    background: #ffffff;
    padding: 4px 10px;
    &:hover {
      background: #bababa;
    }
  }
}
</style>
