"use strict";
// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количнство студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

// Task 1
const nameSubjects = Object.keys(subjects).join();
console.log(nameSubjects);

// Task 2
const valueStudents = Object.values(subjects).reduce(
  (accumulator, currentValue) => accumulator + currentValue.students,
  0
);
console.log(valueStudents);

const valueTeachers = Object.values(subjects).reduce(
  (accumulator, currentValue) => accumulator + currentValue.teachers,
  0
);
console.log(valueTeachers);

// Task 3

const averageStudents = valueStudents / Object.keys(subjects).length;
console.log(averageStudents);

// Task 4

const arrayOfSubject = [];
arrayOfSubject.push(Object.values(subjects));
const arraySubject = JSON.stringify(arrayOfSubject);
console.log(arraySubject);

// Task 5

const arraySorted = Object.keys(subjects).sort(
  (a, b) => subjects[b].teachers - subjects[a].teachers
);
console.log(arraySorted);
