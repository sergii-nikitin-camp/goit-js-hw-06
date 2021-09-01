/**
 * Задание 7
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над
 * массивом объектов пользователей из файла users.js.
 * Получить общую сумму баланса (поле balance) всех пользователей.
 *
 * const calculateTotalBalance = users => {
 *   // твой код
 * };
 *
 * console.log(calculateTotalBalance(users)); // 20916
 */

import users from "./users.js";

const calculateTotalBalance = (users) => {
  return users.reduce((totalBalance, { balance }) => totalBalance + balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916