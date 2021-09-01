/**
 * Задание 1
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над
 * массивом объектов пользователей из файла users.js.
 * Получить массив имен всех пользователей (поле name).
 *
 * const getUserNames = users => {
 *   // твой код
 * };
 *
 * console.log(getUserNames(users));
 * // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
 */

import users from "./users.js";

const getUserNames = (users) => {
  return users.map(({ name }) => name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
