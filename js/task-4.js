/**
 * Задание 4
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции
 * над массивом объектов пользователей из файла users.js.
 * Получить массив только неактивных пользователей (поле isActive).
 *
 * const getInactiveUsers = users => {
 *   // твой код
 * };
 *
 * console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
 */

import users from "./users.js";

const getInactiveUsers = (users) => {
  return users.filter(({ isActive }) => !isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]