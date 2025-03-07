import type { City, Shift, Team } from "../types";

export const cities: City[] = [
  {
    id: 1,
    name: "Москва",
    workshops: [
      {
        id: 1,
        name: "Цех 1",
        employees: [
          { id: 1, name: "Иван Иванов" },
          { id: 2, name: "Петр Петров" },
        ],
      },
      {
        id: 2,
        name: "Цех 2",
        employees: [
          { id: 3, name: "Сергей Сергеев" },
          { id: 4, name: "Алексей Алексеев" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Санкт-Петербург",
    workshops: [
      {
        id: 3,
        name: "Цех 3",
        employees: [
          { id: 5, name: "Дмитрий Дмитриев" },
          { id: 6, name: "Николай Николаев" },
        ],
      },
    ],
  },
];

export const teams: Team[] = [
  { id: 1, name: "Бригада А" },
  { id: 2, name: "Бригада Б" },
  { id: 3, name: "Бригада В" },
  { id: 4, name: "Бригада Г" },
  { id: 5, name: "Бригада Д" },
];

export const shift: Shift[] = [
  { id: 0, number: 1 },
  { id: 1, number: 2 },
  { id: 2, number: 3 },
  { id: 3, number: 4 },
];
