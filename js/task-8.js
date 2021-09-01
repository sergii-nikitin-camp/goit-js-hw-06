/**
 * Задание 8
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции
 * над массивом объектов пользователей из файла users.js.
 * Массив имен всех пользователей у которых есть друг с указанным именем.
 *
 * const getUsersWithFriend = (users, friendName) => {
 *   // твой код
 * };
 *
 * console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
 * console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
 */

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(({ friends }) => friends.some((friend) => friend === friendName))
    .map(({ name }) => name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]