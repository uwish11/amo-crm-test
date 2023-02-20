<template>
  <div class="area">
    <div
      v-for="item in answers"
      :key="item.id"
      class="area__item">
      {{ item.id }} - {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">

interface AnswerAreaProps {
  answers: {id: number, name: string}[]
}

defineProps<AnswerAreaProps>()


</script>

<style scoped lang="scss">
.area {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  border: 2px solid grey;
  border-radius: 3px;
  max-width: 400px;
  height: 400px;
  background: #ffffff;
  &__item {
    margin-bottom: 6px;
  }
}
</style>
