<script setup lang="ts">
import { ref, computed } from "vue";
import { useEmployeeStore } from "../store/employeeStore";
import { useRouter } from "vue-router";

const store = useEmployeeStore();
const router = useRouter();

const selectedCity = ref<number | null>(null);
const selectedWorkshop = ref<number | null>(null);
const selectedEmployee = ref<number | null>(null);
const selectedTeam = ref<number | null>(null);
const selectedShift = ref<number | null>(null);

const cities = computed(() => store.cities);
const workshops = computed(
  () =>
    store.cities.find((city) => city.id === selectedCity.value)?.workshops || []
);
const employees = computed(
  () =>
    workshops.value.find((workshop) => workshop.id === selectedWorkshop.value)
      ?.employees || []
);

const handleCityChange = () => {
  store.setSelectedCity(selectedCity.value!);
};

const handleWorkshopChange = () => {
  store.setSelectedWorkshop(selectedWorkshop.value!);
};

const handleSubmit = () => {
  store.setSelectedEmployee(selectedEmployee.value!);
  store.saveData(selectedTeam.value, selectedShift.value);
  router.push("/result");
};
</script>

<template>
  <div class="form-page">
    <h1 class="form-page__title">Форма ввода данных</h1>

    <form class="form-page__form" @submit.prevent="handleSubmit">
      <div class="form-page__field">
        <label class="form-page__label">Город:</label>
        <select
          class="form-page__select"
          v-model="selectedCity"
          @change="handleCityChange"
        >
          <option value="" disabled>Выберите город</option>
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>

      <div class="form-page__field">
        <label class="form-page__label">Цех:</label>
        <select
          class="form-page__select"
          v-model="selectedWorkshop"
          @change="handleWorkshopChange"
        >
          <option value="" disabled>Выберите цех</option>
          <option
            v-for="workshop in workshops"
            :key="workshop.id"
            :value="workshop.id"
          >
            {{ workshop.name }}
          </option>
        </select>
      </div>

      <div class="form-page__field">
        <label class="form-page__label">Сотрудник:</label>
        <select class="form-page__select" v-model="selectedEmployee">
          <option value="" disabled>Выберите сотрудника</option>
          <option
            v-for="employee in employees"
            :key="employee.id"
            :value="employee.id"
          >
            {{ employee.name }}
          </option>
        </select>
      </div>

      <div class="form-page__field">
        <label class="form-page__label">Бригада:</label>
        <select class="form-page__select" v-model="selectedTeam">
          <option
            v-for="team in store.teamsList"
            :key="team.id"
            :value="team.id"
          >
            {{ team.name }}
          </option>
        </select>
      </div>

      <div class="form-page__field">
        <label class="form-page__label">Смена:</label>
        <select class="form-page__select" v-model="selectedShift">
          <option
            v-for="shift in store.shiftList"
            :key="shift.id"
            :value="shift.id"
          >
            {{ shift.number }}
          </option>
        </select>
      </div>

      <button class="form-page__button" type="submit">Сохранить</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/var.scss" as *;

.form-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: milkGray;
  border-radius: 8px;
  box-shadow: 0 2px 8px $darkBlue;

  .form-page__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: $darkGray;
  }

  .form-page__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-page__field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-page__label {
    font-size: 16px;
    color: $gray;
  }

  .form-page__select,
  .form-page__input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid $lightGray;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: $blue;
    }
  }

  .form-page__button {
    padding: 12px;
    font-size: 16px;
    color: $white;
    background-color: $blue;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
}
</style>
