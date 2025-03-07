import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { cities, teams, shift } from "../data/mockData";

export const useEmployeeStore = defineStore("employee", () => {
  const selectedCity = ref<number | null>(null);
  const selectedWorkshop = ref<number | null>(null);
  const selectedEmployee = ref<number | null>(null);
  const selectedTeam = ref<number | null>(null);
  const selectedShift = ref<number | null>(null);
  const citiesList = ref(cities);

  const workshops = computed(() => {
    if (selectedCity.value === null) return [];
    return (
      citiesList.value.find((city) => city.id === selectedCity.value)
        ?.workshops || []
    );
  });

  const employees = computed(() => {
    if (selectedWorkshop.value === null) return [];
    return (
      workshops.value.find((workshop) => workshop.id === selectedWorkshop.value)
        ?.employees || []
    );
  });

  const teamsList = computed(() => teams);

  const shiftList = computed(() => shift);

  const setSelectedCity = (cityId: number) => {
    selectedCity.value = cityId;
    selectedWorkshop.value = null;
    selectedEmployee.value = null;
  };

  const setSelectedWorkshop = (workshopId: number) => {
    selectedWorkshop.value = workshopId;
    selectedEmployee.value = null;
  };

  const setSelectedEmployee = (employeeId: number) => {
    selectedEmployee.value = employeeId;
  };

  const saveData = (teamId: number | null, shiftId: number | null) => {
    selectedTeam.value = teamId;
    selectedShift.value = shiftId;
  };

  return {
    selectedCity,
    selectedWorkshop,
    selectedEmployee,
    selectedTeam,
    selectedShift,
    cities: citiesList,
    teamsList,
    shiftList,
    workshops,
    employees,
    setSelectedCity,
    setSelectedWorkshop,
    setSelectedEmployee,
    saveData,
  };
});
