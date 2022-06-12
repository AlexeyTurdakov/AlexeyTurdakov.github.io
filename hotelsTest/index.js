"use strict";

/*1. Задачи на сообразительность:

Есть 90 человек. Каждый из этих 90 человек относится к одной из двух категорий. Одни на все вопросы говорят правду, другие — всегда врут. У каждого ровно 1 любимое блюдо из списка (макароны/пельмени/вареники). Каждому задают три вопроса:
Ваше любимое блюдо — макароны?
Ваше любимое блюдо — пельмени?
Ваше любимое блюдо — вареники?
Результаты получились такие: 
на первый вопрос утвердительно ответило 45 человек,
на второй — 35,
на третий — 30.
Сколько человек всегда говорят правду?

Ответ: 70 человек

--------------------------------------------------

Есть числа от трех до одиннадцати. Есть квадрат — 3 на 3 клетки:
а б в
г д е
ё ж з
(Буквы ничего не значат, кроме того, что числа не повторяются)
Можно ли расставить числа в клетки квадрата таким образом, что перемножения чисел в строках дает тот же результат, что и произведение чисел в столбцах с теми же номерами?
Если можно — расставьте, если нельзя — объясните почему.

Ответ: 
11 5 8
10 7 3
4 6 9

--------------------------------------------------

Ученые разработали новый материал неизвестной прочности. Они знают, что материал разбивается при падении с высоты от 1 метра до 5 000 метров. Но не знают, с какой именно высоты. Чтобы определить прочность, ученые поднимают предмет на некоторую высоту и сбрасывают его оттуда. Их задача — определить, начиная с какой именно высоты предмет начнет разбиваться.
Специальная платформа, с помощью которой они осуществляют эксперимент, скидывает предмет только с дискретных высот (1, 2, 3 ... 4999, 5000 метров — платформа не может скинуть предмет, например, с 2,5 метров. Точности в 1 метр ученым вполне достаточно). При падении с высоты "n" метров предмет уничтожается. Если же его сбрасывали с высоты ниже "n", то его можно использовать в повторных экспериментах.
Нужно АБСОЛЮТНО ТОЧНО найти ту высоту, начиная с которой предметы разрушаются. Сделать это нужно за МИНИМАЛЬНО возможное число экспериментов. У ученых при этом всего 2 предмета, но они абсолютно одинаковые. Каким образом этого можно достигнуть? Сколько экспериментов при этом максимально потребуется?

Ответ:
Первое что приходит в голову в качестве решения данной задачи,
это использование бинарного поиска.
Но мы имеем всего два предмета.
Поэтому, я бы решал эту задачу так:
1. Сбрасываем первый предмет с высоты 2500 метров.
2. Если первый предмет разбился, то мы начинаем сбрасывать
второй предмет с высоты 1 метра и постепенно увеличивая высоту,
до момента крушения предмета (1м, 2м, 3м и т.д.).
3. Если предмет не разбился при падении с высоты 2500 метров,
то повторяем алгоритм увеличивая высоту на 1м до момента крушения.
(2500м, 2501м и т.д.)
Таким образом мы значительно уменьшаем кол-во попыток и время 
решения данной задачи. 
 */

/* 2.Задачи по погроммированию */

/*Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. Например, «Москва, Санкт-Петербург, Воронеж.» */

function returnStringFromArray(arr) {
  return arr.join(", ") + ".";
}
console.log(
  "Задача 1: ",
  returnStringFromArray(["Москва", "Питер", "Воронеж"])
);

/* Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок. 
Пример: 
27 => 25, 27.8 => 30, 41.7 => 40.
 */

function roundNumber(num) {
  let remainder = num % 5;

  if (remainder >= 2.5) {
    return num - remainder + 5;
  }

  if (remainder < 2.5) {
    return num - remainder;
  }

  return num;
}

console.log(
  "Задача 2: ",
  roundNumber(2.2),
  roundNumber(2.8),
  roundNumber(27.8),
  roundNumber(45)
);

/* Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».
 */

function returnCase(num) {
  if (
    (num % 10 >= 5 && num % 10 <= 9) ||
    (num >= 11 && num <= 14) ||
    num % 10 === 0
  ) {
    return `${num} компьютеров, `;
  } else if (num % 10 === 1) {
    return `${num} компьютер, `;
  } else {
    return `${num} компьютера, `;
  }
}

console.log(
  "Задача 3: ",
  returnCase(0),
  returnCase(1),
  returnCase(2),
  returnCase(3),
  returnCase(4),
  returnCase(5),
  returnCase(6),
  returnCase(7),
  returnCase(8),
  returnCase(9),
  returnCase(10),
  returnCase(11),
  returnCase(12),
  returnCase(13),
  returnCase(14),
  returnCase(15),
  returnCase(16),
  returnCase(17),
  returnCase(18),
  returnCase(19),
  returnCase(20),
  returnCase(21),
  returnCase(22),
  returnCase(23),
  returnCase(24),
  returnCase(25),
  returnCase(2222),
  returnCase(516),
  returnCase(904)
);

/*Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя). */

function primeNumberTest(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(
  "Задача 4: ",
  primeNumberTest(2),
  primeNumberTest(3),
  primeNumberTest(4),
  primeNumberTest(83),
  primeNumberTest(77),
  primeNumberTest(97)
);

/*Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом).
На вход подаются два массива.
На выходе массив с необходимыми совпадениями.
Пример:
[7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
На выходе [1, 17]
 */

function intersectionArray(arr, arr1) {
  let obj = reiterationElementsInArray(arr);
  let obj1 = reiterationElementsInArray(arr1);
  const resultArray = [];
  for (let i in obj) {
    for (let j in obj1) {
      if (i === j) {
        if (obj[i] === obj1[j]) {
          resultArray.push(Number(i));
        }
      }
    }
  }
  return resultArray;
}

function reiterationElementsInArray(array) {
  return array.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
}

console.log('Задача 5: ',
  intersectionArray(
    [7, 17, 1, 9, 1, 17, 56, 56, 23],
    [56, 17, 17, 1, 23, 34, 23, 1, 8]
  )
);
