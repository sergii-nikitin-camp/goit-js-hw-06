/**
 * Задание 9
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции
 * над массивом объектов пользователей из файла users.js.
 * Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
 *
 * const getNamesSortedByFriendsCount = users => {
 *   // твой код
 * };
 *
 * console.log(getNamesSortedByFriendsCount(users));
 * // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
 */

import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
