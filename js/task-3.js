/**
 * Задание 3
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции
 * над массивом объектов пользователей из файла users.js.
 * Получить массив имен пользователей по полу (поле gender).
 *
 * const getUsersWithGender = (users, gender) => {
 *   // твой код
 * };
 *
 * console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
 */

import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  return users.filter((user) => user.gender === gender).map(({ name }) => name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
