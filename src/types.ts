export interface Subject {
  id: string;
  name: string;
  teacher: string;
  room?: string;
}

export interface Grade {
  id: string;
  subjectId: string;
  value: number;
  date: string;
  type: 'Поточна' | 'Тематична' | 'Семестрова' | 'Річна';
  comment?: string;
}

export interface ScheduleItem {
  id: string;
  subjectId: string;
  dayOfWeek: number; // 1-5 (Mon-Fri)
  startTime: string;
  endTime: string;
}

export interface Homework {
  id: string;
  subjectId: string;
  task: string;
  deadline: string;
  completed: boolean;
}

export interface Student {
  name: string;
  class: string;
  avatar?: string;
}
