<template>
  <div class="container">
    <custom-select
      :disabled="isLoading"
      :current-value="currentOption"
      :items="selectOptions"
      @on-change="changeOption"
    />
    <custom-button
      :disabled="isDisabledButton"
      :is-loading="isLoading"
      @on-click="createEntity"
    >
      Создать
    </custom-button>
    <answer-area :answers="entitiesStore.entitiesList" />
  </div>
</template>


<script setup lang="ts">
import CustomButton from "@/components/UI/CustomButton.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";
import AnswerArea from "@/components/AnswerArea.vue";
import {computed, ref} from "vue";
import {EntitiesEnum} from "@/constants";
import {useEntitiesStore} from "@/store/entities";
//
interface Option {
  id: number;
  value: string;
}

const entitiesStore = useEntitiesStore()

const selectOptions: Option[] = [
  {id: 0, value: 'Не выбрано'},
  {id: EntitiesEnum.LEAD, value: 'Сделка'},
  {id: EntitiesEnum.CONTACT, value: 'Контакт'},
  {id: EntitiesEnum.COMPANY, value: 'Компания'}
]

const currentOption = ref<Option>(selectOptions[0])
const isLoading = ref(false)
const isDisabledButton = computed(() => currentOption.value.id === 0)

function changeOption(id: number) {
  const option = selectOptions.find((el: {id: number, value: string}) => el.id === id)
  if (option) {
    currentOption.value = option
  }
}
async function createEntity() {
  isLoading.value = true
  switch (currentOption.value.id) {
    case EntitiesEnum.LEAD:
      await entitiesStore.createLead({name: 'Сделка', price: 1000})
      break;
    case EntitiesEnum.CONTACT:
      await entitiesStore.createContact({name: 'Контакты', first_name: 'Артем', last_name: 'Уваров'})
      break;
    case EntitiesEnum.COMPANY:
      await entitiesStore.createCompany({name: 'Компания'})
  }
  isLoading.value = false
}

</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
