/**
 * Задание 2
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над
 * массивом объектов пользователей из файла users.js.
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor).
 *
 * const getUsersWithEyeColor = (users, color) => {
 *   // твой код
 * };
 *
 * console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
 */
import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
