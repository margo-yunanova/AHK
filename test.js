// let admin;
// let name;
// name = "Джон";
// admin = name;
// alert(admin)

// let currentUserName = prompt("Как тебя зовут");
// alert(currentUserName);

//alert(" "+ 1 + 0); //10
//alert(" " - 1 + 0); //-1 
//alert(true + false); //1
//alert(6 / "3"); //2
//alert("2" * "3"); //6
//alert(4 + 5 + "px"); //9px
//alert("$" + 4 + 5); //$45
//alert("4" - 2); //2
//alert("4px" - 2); //NAN - NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции
//alert(7/0); //infinity - представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа. Мы можем получить его в результате деления на ноль.
//alert("-9" +5 ); //-95
//alert(null +1); //1 - null - специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно» - становится 0 после численного преобразования.
//alert(undefined + 1); //nan undefined - начение не было присвоено - становится NaN после численного преобразования.
//alert(" \t \n" - 2); //-2 Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// a = Number(a);
// b = Number(b);
// alert(a+b);

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a+b);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b);

// let year = prompt("Какой сейчас год");
// if(year == 2021) //проверка на равенство
// alert("Вы правы!");

// let year = prompt("Какой сейчас год");
// let condition = (year == 2021);
// if (condition) {
//     alert("Вы правы!");    
// } else{
//     alert("Неправильно");
// }

// let year = prompt("Когда отменили крепостное право");
// if (year < 1861) {
//     alert("Это рано");
// } else if (year > 1861) {
//     alert("Это поздно");
// } else {
//     alert("Верно")
// }

// let name = prompt("Какое «официальное» название JavaScript?");
// if (name == "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }

// let value = prompt("Введите число");
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

// let result = (a + b < 4) ? "Мало" : "Много";

// let login = prompt("Введите логин");
// let message = (login == "Сотрудник") ? "Привет" :
//     (login == "Директор") ? "Здравствуйте" :
//     (login == "") ? "Нет логина" : "";
// alert(message);

//I
// let age;
// age = prompt("Введите число");
// if (age >= 14 && age <= 90){
//     alert("Данные в диапазоне 14-90")
// }
// else {
//     prompt("Введите новое число")
// }


//II

// let age;
// age = prompt("Введите число");
// if (age < 14 || 90 < age) {  //   14-90
//     alert("Данные не в диапазоне")
// }

// let age;
// age = prompt("Введите число");
// if (!(14 < age && age < 90)) { //! - не выполняется условие, если
//     alert("Данные не в диапазоне")
// }

// const login = "админ";
// const parol = "лето";
// let loginUser = prompt("Введите логин");
// if (loginUser === login) {
//     let parolUser = prompt("Введите пароль");
//     if (parolUser === parol) {
//         alert("Здравствуйте!");
//     } else if (parolUser === "" || parolUser === null) {
//         alert("Отменено");
//     } else {
//         alert("Неверный пароль");
//     }
// } else if (loginUser === "" || loginUser === null) {
//     alert("Отменено-2");
// } else {
//     alert("Я Вас не знаю");
// }

// let i = 0;
// while (++i < 5) alert(i);
// i=1, 1<5, alert(1);
// i=2, 2<5, alert(2);
// i=3, 3<5, alert(3);
// i=4, 4<5, alert(4);
// i=5, 5<5, done
 
// let i = 0;
// while (i++ <5) alert(i);
// i = 1, 0<5, alert(1);
// i = 2, 1<5, alert(2);
// i = 3, 2<5, alert(3);
// i = 4, 3<5, alert(4);
// i = 5, 4<5, alert(5);
// i = 6, 5<5, done

// for (let i = 0; i < 5; i++) alert(i);
// // 0<5, alert(0);
// // i=1, 1<5, alert(1);
// // i=2, 2<5, alert(2);
// // i=3, 3<5, alert(3);
// // i=4, 4<5, alert(4);
// // i=5, 5<5, done

// for (let i = 0; i < 5; ++i) alert(i);
// // i=0, 0<5, alert(0);

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         alert(i)
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}`);
//     i++;
// }

// let number;
// do {
//     let value = prompt("Введите число больше 100");
//     if (value === null) break;
//     number = +value;
// } while (number <= 100); 
  
//let number = +prompt("Введите число");

// for (let i = 2; i < 10; i++) {
//     for ( let j = 2; j <= i; j++) {
//         if (i % j === 0) continue;    
//         console.log(i)
//     }   
// }

// let i;
// let j;
// for (i = 1; i <= 10; i++) { 
//     let x = 0;
//     for (j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             x = x + 1;
//            // console.log(`${i} делится на ${j} ${x}`)
//         }
//      }    
//     //console.log(`у ${i} - ${x} делителей`)
//     if (x === 2) console.log(i)
// }

// outer: for (i = 2; i <= 100; i++) {
//     for (j = 2; j < i; j++) {
//         if ( (i % j) === 0) {              
//             continue outer;
//         }
//     }
//     console.log(i);
// }
    
//Цикл while в JavaScript

// задача 1 - Выведите в консоль числа от 1 до 100

// let i = 0;
// while (i <= 100) {
//     console.log(i)
//     i++
// }

// задача 2 - Выведите в консоль числа 11 до 33

// let i = 11;
// while (i <= 33) {
//     console.log(i)
//     i++
// }

/* задача 3 - Выведите в консоль четные числа
в промежутке от 0 до 100 */

// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i +=2;
// }

/* задача 4 - Выведите в консоль нечетные числа
в промежутке от 1 до 99 */

// let i = 1;
// while (i <= 99) {
//     console.log(i);
//     i +=2;
// }

// задача 5 - Выведите в консоль числа от 30 до 0

// let i = 30;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

//Ошибки начинающих при работе с циклом while в JavaScript

//задача 1

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//задача 2

// let i = 10;
// while (i >= 1) {
//      console.log(i);
//      i--;
// }

//задача 3

// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

//задача 4

// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

//задача 5

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//Цикл for в JavaScript

/* задача 1 - С помощью цикла for выведите в консоль
числа от 1 до 100 */

// for (let i = 1; i <=100; i++) {
//     console.log(i);
// }

/* задача 2 - С помощью цикла for выведите в консоль
числа от 11 до 33 */

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

/* задача 3 - С помощью цикла for выведите в консоль
четные числа в промежутке от 0 до 100 */

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

/* задача 4 - С помощью цикла for выведите в консоль
нечетные числа в промежутке */

// for (let i = 1; i <= 99; i +=2) {
//     console.log(i);
// }

/* задача 5 - С помощью цикла for выведите в консоль
числа от 100 до 0 */

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

//Накопление результата в цикле JavaScript

// let result = 0;
// for (let i = 1; i <=100; i++) {
//     //result = result + i;
//     result += i;
//     //console.log(result);
// }
// console.log(result);

//задача 1 - Найдите произведение целых чисел от 1 до 20

// //let a = 0;
// let b = 1;
// for (let i = 1; i <= 20; i++) {
//     //a = a + 1
//     //console.log(a);
//     b = i * b
//     //console.log(b);
//     //console.log(i);
// }
// console.log(b);

//задача 2 - Найдите сумму четных чисел от 2 до 100

// let a = 0;
// for (let i = 2; i <=100; i +=2) {
//     //console.log(i);
//     a = a + i;
//     //console.log(a);
// }
// console.log(a);

//задача 3 - Найдите сумму нечетных чисел от 1 до 99

// let a = 0;
// for (i = 1; i <= 99; i += 2) {
//     //console.log(i);
//     a = a + i;
//     //console.log(a);
// }
// console.log(a);

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser = prompt('Введите имя браузера');
// if (browser === 'Edge') {
//     alert('Ура');
// } else if (browser === 'Chrome' || browser === "Firefox" || browser === 'Safari' || browser === "Opera") {
//     alert('Сойдет');
// } else {
//     alert('Ну вот :-(');
// }   

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// Функции

// Задача 1. Сделайте функцию, выводящую на экран ваше имя.

// function myName () {
//   alert('Margo');
// }

// myName();

// Задача 2. Сделайте функцию, выводящую на экран сумму чисел от 1 до 100

// function summ() {
//   let a = 0;  
//   for (let i = 1; i <= 100; i++) {
//     a = a + i;
//   }
//   alert(a);
// }

// summ();

// Параметры функций

// Задача 1. Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

// function cubeNumber (number) {
//   alert(number ** 3);
// }

// cubeNumber(+prompt('Введите число'));

// Задача 2. Сделайте функцию, которая параметром принимает число и проверяет, 
// положительное это число или отрицательное.
// В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

// function positiveNumber (number) {
//   if (number > 0) {
//     alert('+++');
//   } else if (number < 0) {
//     alert('---');
//   } else {
//     alert('это ноль')
//   }
// }

// positiveNumber (+prompt('Введите число'));

// Задача 3. Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

// function summ(a, b, c) {
//   alert(a + b + c);
// }

// summ(+prompt('Введите первое число'), +prompt('Введите второе число'), +prompt('Введите третье число'));

// Задача 4. Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму.
// Пусть даны 3 переменные с числами. С помощью созданной вами функции выведите на экран сумму значений эти переменных.

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function summ(num1, num2, num3) {
//   alert(num1 + num2 + num3);
// }

// summ(param1, param2, param3);

// Инструкция return

// Задача 1. Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа.
// С помощью этой функции найдите куб числа 3 и запишите его в переменную result.

// function cubeNumber(a) {
//   return a ** 3;
// }

// let result = cubeNumber(3);

// Задача 2. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их на экран.

// function squareRootNumber(a) {
//   return a ** (1/2);
// }

// let b = squareRootNumber(3);
// let c = squareRootNumber(4);

// alert(b + c);


// Задача 3.

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function round(num) {
//   return num.toFixed(3);
// }

// let result = round(sqrt(2));
// alert(result);

// Задача 4. Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

// let result = sum(sqrt(2), sqrt(3), sqrt(4));
// alert(result);

// Задача 5. Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

// function round(num) {
//   return num.toFixed(3);
// }

// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, 
// округленная до 3-х знаков в дробной части.

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
// alert(result);

// Задача 10. Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, 
// пока результат не станет меньше 10. Пусть функция возвращает количество итераций,
// которое потребовалось для достижения результата.

// function func(number) {
//   let i = 0;  
//   let result = number;
  
//   while(true) {
//     result = result / 2;
//     // result /= 2;
    
//     if(result < 10) {
//       return i;
//     }
    
//     i++;
//   }
// }

// alert(func(100));

// Задача 11. Дана следующая функция:

// function func(num1, num2) {
// 	let result;
	
// 	if(num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;
// 	}
	
// 	return result;
// }

// alert(func(3, 4));

// Перепишите ее в сокращенной форме

// function func(num1, num2) {
//   if(num1 > 0 && num2 > 0) {
//     return num1 * num2;
//   } else {
//     return num1 - num2;
//   }
// }

// alert(func(3, 4));

// function func(num1, num2) {
//    return (num1 > 0 && num2 > 0) ? num1 * num2 : num1 - num2
// }

// alert(func(3, 4));

// Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// Сделайте два варианта функции checkAge:
// Используя оператор ?

// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?');
// }

// Используя оператор ||

// function checkAge(age) {
//   return age > 18 || confirm('Родители разрешили?');
// }

// Функция min(a, b). Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function funcMin(a, b) {
//   return a < b ? a : b;
// }

// console.log(funcMin(2, 5));
// console.log(funcMin(3, -1));
// console.log(funcMin(1, 1));

// Функция pow(x,n). Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

// let x = +prompt('Введите число');
// let n = +prompt('Введите степень');

// function pow(x, n) {
//   //if(n >= 1) {
//     return x ** n;
//   //}
// }

// alert(pow(x, n));

let x = +prompt('Введите число');
let n = +prompt('Введите степень');

function pow(x, n) {
  
  let x1 = 1; 
  
  for(i = 1; i <= n; i++) {
    x1 = x1 * x;
    // 5 = 1*5
    // 25 = 5*5
    // 125 = 25*5
    // 625 = 125*5
    // 3125 = 625*5

 } 
  
 return x1;
}

console.log(pow(x, n));







