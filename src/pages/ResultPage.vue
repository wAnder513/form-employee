<script setup lang="ts">
import { computed } from "vue";
import { useEmployeeStore } from "../store/employeeStore";

const store = useEmployeeStore();

const cityName = computed(
  () =>
    store.cities.find((city) => city.id === store.selectedCity)?.name ||
    "Не выбрано"
);
const workshopName = computed(
  () =>
    store.cities
      .find((city) => city.id === store.selectedCity)
      ?.workshops.find((workshop) => workshop.id === store.selectedWorkshop)
      ?.name || "Не выбрано"
);
const employeeName = computed(
  () =>
    store.cities
      .find((city) => city.id === store.selectedCity)
      ?.workshops.find((workshop) => workshop.id === store.selectedWorkshop)
      ?.employees.find((employee) => employee.id === store.selectedEmployee)
      ?.name || "Не выбрано"
);
const team = computed(
  () =>
    store.teamsList.find((team) => team.id === store.selectedTeam)?.name ||
    "Не выбрано"
);
const shift = computed(
  () =>
    store.shiftList.find((shift) => shift.id === store.selectedShift)?.number ||
    "Не выбрано"
);
</script>

<template>
  <div class="result-page">
    <h1 class="result-page__title">Результат ввода</h1>
    <div class="result-page__content">
      <p class="result-page__item"><strong>Город:</strong> {{ cityName }}</p>
      <p class="result-page__item"><strong>Цех:</strong> {{ workshopName }}</p>
      <p class="result-page__item">
        <strong>Сотрудник:</strong> {{ employeeName }}
      </p>
      <p class="result-page__item"><strong>Бригада:</strong> {{ team }}</p>
      <p class="result-page__item"><strong>Смена:</strong> {{ shift }}</p>
    </div>
    <router-link to="/" class="result-page__button"
      >Вернуться к форме</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/var.scss" as *;

.result-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: milkGray;
  border-radius: 8px;
  box-shadow: 0 2px 8px $darkBlue;

  .result-page__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: $darkGray;
  }

  .result-page__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
  }

  .result-page__item {
    font-size: 16px;
    color: $gray;

    strong {
      color: $darkGray;
    }
  }

  .result-page__button {
    display: block;
    width: max-content;
    padding: 12px;
    font-size: 16px;
    color: $white;
    background-color: $blue;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;
    text-decoration: none;
  }
}
</style>
