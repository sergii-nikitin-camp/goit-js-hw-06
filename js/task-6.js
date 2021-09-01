/**
 * Задание 6
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над
 * массивом объектов пользователей из файла users.js.
 * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
 *
 * const getUsersWithAge = (users, min, max) => {
 *   // твой код
 * };
 *
 * console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
 *
 * console.log(getUsersWithAge(users, 30, 40));
 * // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
 */

import users from "./users.js";

const getUsersWithAge = (users, min, max) => {
  return users.filter(({ age }) => age >= min && age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]