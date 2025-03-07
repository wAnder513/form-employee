export interface City {
  id: number;
  name: string;
  workshops: Workshop[];
}

export interface Workshop {
  id: number;
  name: string;
  employees: Employee[];
}

export interface Employee {
  id: number;
  name: string;
}

export interface Team {
  id: number;
  name: string;
}

export interface Shift {
  id: number;
  number: number;
}
