/**
 *  Задание 10
 *
 * Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции
 * над массивом объектов пользователей из файла users.js.
 * Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть
 * отсортированы в алфавитном порядке.
 *
 * const getSortedUniqueSkills = users => {
 *   // твой код
 * };
 *
 * console.log(getSortedUniqueSkills(users));
 * // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non',
 * 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
 */

import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((allSkills, { skills }) => allSkills.concat(...skills), [])
    .filter((skill, indx, array) => indx === array.indexOf(skill))
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non',
//'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
