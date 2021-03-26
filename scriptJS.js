// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);
// let stringArr = ['hello' , 'world', 'user', 'admin', 'script'];
// console.log(stringArr);
// let strNumBool = ['green' , 'red', 'white', 'black', 'gold', 6 ,7 ,8 ,9 ,10 , true];
// console.log(strNumBool)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let fruits = [];
// fruits[0] = 'Apple'
// fruits[1] = 'Pear'
//
// console.log(fruits[0]);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let text = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at dicta doloribus ea eveniet facilis labore nemo nulla sed vel.';
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${text}</div>`);
//
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let text = ' Lorem ipsum dolor sit amet';
//
// for (let i = 0; i < 10; i++) {
//
//     document.write(`<div> ${text} ${i}</div>`);
// }
//

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let text = 'hello world';
// let i = 0;
// while (i<20){
//     document.write(`<h1>${text}</h1>`)
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
//
// let text = 'hello world';
// let i = 0;
// while (i<20){
//     document.write(`<h1>${text} ${i}</h1>`)
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.


// let numArr = [23,25,32,5,21,6,7,2,9,10];
// for (let i = 0; i < numArr.length; i++) {
//
//     console.log(`${numArr}`);
//
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let strArr = ['html','css','java','js','node.js','c++','c#','python','ruby','git'];
// for (let i = 0; i < strArr.length; i++) {
//
//     console.log(`${strArr}`);
//
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let anotherArr = [true,'css','java','js',2,'c++','c#','python',false,99];
// for (let i = 0; i < anotherArr.length; i++) {
//
//     console.log(`${anotherArr}`);
//
// }
//
//

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let anotherArr = [true,'css','java','js',2,'c++','c#','python',false,99];
//
// for (let i = 0; i < anotherArr.length; i++) {
//     if(typeof anotherArr[i] ==="boolean" ) {
//         console.log('boolen' + ' ' + anotherArr[i]);
//
//     }
//
//
//
// }
//


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let anotherArr = [true,'css','java','js',2,'c++','c#','python',false,99];
//
// for (let i = 0; i < anotherArr.length; i++) {
//     if(typeof anotherArr[i] ==="number" ) {
//         console.log('number' + ' ' + anotherArr[i]);
//
//     }
//
//
//
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let anotherArr = [true,'css','java','js',2,'c++','c#','python',false,99];
//
// for (let i = 0; i < anotherArr.length; i++) {
//     if(typeof anotherArr[i] ==="string" ) {
//         console.log('string' + ' ' + anotherArr[i]);
//
//     }
//
//
//
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let empty = [];
// empty[0] = true
// empty[1] = 'css'
// empty[2] = 'java'
// empty[3] = 'js'
// empty[4] =  2
// empty[5] = 'c++'
// empty[6] = 'c#'
// empty[7] = 'python'
// empty[8] = false
// empty[9] = 34
// for (let i = 0; i <empty.length; i++) {
//      {
//         console.log(`${empty[i]}`);
//
//     }
//
//
//
// }
//
//


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i + ' ')
//     document.write(i + ' ');
//
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i + ' ')
//     document.write(i + ' ');
//
// }
//


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i + ' ')
//     document.write(i + ' ');
//
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i < 100; i++) {
//     if(i % 2 === 0) {
//         console.log(i + ' ')
//         document.write(i + ' ');
//     }
//
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i++) {
//     if(i  % 2 !== 0) {
//         console.log(i + ' ')
//         document.write(i + ' ');
//     }
//
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


// for (let min = 0; min < 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log('Time: ' + min + ':' + sec);
//     }
// }
//


// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hour = 0; hour < 2; hour++) {
//     for (let min = 0; min < 60; min++){
//         for(let sec = 0; sec < 60; sec++)
//             console.log('Time: ' + hour + ':' + min + ':' + sec);
//     }
//
//
//
//
//
// }
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i]);
//
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let i = 0 ;
// while (i < arr.length) {
//     document.write(arr[i])
//     i++;
//
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// for (let i of arr) {
//     document.write(i);
//
// }
//


//
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.


// let arr = ['a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//     arr.push(i);
//
// }
// document.write(`${arr}`);

//
// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let arr = [1, 2, 3];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     arr.reverse();
//     newArr.push(arr[i]);
//     document.write(newArr[i]);
// }


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1,2,3]
// for (let i = 4; i <7; i++) {
//     arr.push(i);
//
// }
// document.write(`${arr}`);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1,2,3]
// for (let i = 4; i <7; i++) {
//     arr.unshift(i);
//
//
//
// }
// document.write(`${arr}`);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];
//
// let newArr = arr.shift();
//
// document.write(newArr);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
//
// let end = arr.pop();
//
// document.write(end);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let arr = [1, 2, 3, 4, 5];
//
// let newArr = arr.slice(3,5);
// document.write(`${newArr}`);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
//
// let newArr = arr.slice(0,2);
// document.write(`${newArr}`);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//let arr = [1, 2, 3, 4, 5];

//let newArr = arr.splice(1,2 );
//document.write(`${arr}`);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
//
// let newArr = arr.splice(3,0,'a', 'b', 'c');
// document.write(`${arr}`);
//
//


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
//
// let newArr = arr.splice(1,0,'a','b');
// let newArr2 = arr.splice(6,0,'c');
// let newArr3 = arr.splice(8,0,'e');
// document.write(`${arr}`);
//


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


//let arrNum = [1,2,3,4,5,6,7,8,9,10];
//for (let i = 0; i < arrNum.length; i++) {
// if(arrNum[i] % 2 === 0) {
//      console.log(arrNum[i]);
//}
//}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arrNum = [1,2,3,4,5,6,7,8,9,10];
// let empty = [];
// for (let i = 0; i < arrNum.length; i++) {
//     empty.push(arrNum[i]);
//
// }
// document.write(`${empty}`)
//


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arrNum = [1,2,3,4,5,6,7,8,9,10];
// let empty = [];
// for (let i = 0; i < 10; i++) {
//    empty[i]=arrNum[i];
//
// }
// document.write(`${empty}`)
//
//
//
//
//
//
//


//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0 ;
// while (i < arr.length) {
//     console.log(arr[i])
//     i++;
//
// }


//     2. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//let i = 1 ;
//while (i < arr.length) {
//
//       console.log(arr[i])
//
//   i+=2;

//}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//  for (let i = 1; i < arr.length; i+=2) {
//      console.log(arr[i]);
//
//  }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//
//     i++;
//
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//  for (let i = 0; i < arr.length; i++) {
//      if (arr[i] %2 ===0)
//      {
//          console.log(arr[i]);
//      }
//
//  }
// 7. замінити кожне число кратне 3 на слово "okten"
//  let arr = [2,17,13,6,22,31,45,66,100,-18];
//  for (let i = 0; i < arr.length; i++) {
//
//      if(arr[i] % 3 === 0)
//      {
//          arr[i] = 'okten';
//
//      }
//
//
//
//  }
// console.log(arr);


// 8. вивести масив в зворотньому порядку.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// arr.reverse()
// console.log(arr);
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//3. перебрати циклом while та вивести  числа тільки з парним індексом
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0 ;
// while (i < arr.length) {
//
//       console.log(arr[i])
//
//   i+=2;
//
// }

// 4. перебрати циклом for та вивести  числа тільки з парним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//  for (let i = 0; i < arr.length; i+=2) {
//      console.log(arr[i]);
//
//  }
//
//

// 5. перебрати циклом while та вивести  числа тільки не парні  значення
//let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//let i = 0;
//while (i < arr.length) {
//  if (arr[i] % 2 !== 0) {
//  console.log(arr[i])
//}

//i++;

//}
//6. перебрати циклом for та вивести  числа тільки не парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//  for (let i = 0; i < arr.length; i++) {
//      if (arr[i] %2 !== 0)
//      {
//          console.log(arr[i]);
//      }
//
//  }
//7. замінити кожне число кратне 3 на слово "okten"
//  let arr = [2,17,13,6,22,31,45,66,100,-18];
//  for (let i = 0; i < arr.length; i++) {
//
//      if(arr[i] % 2 === 0)
//      {
//          arr[i] = 'okten';
//
//      }
//
//
//
//  }
// console.log(arr);


// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.

// let odd = 0;
// let arr = [];
// for (let i = 1; i < 51; i++) {
//     arr.push(odd);
//     odd += 2;
// }
// console.log(arr);
// - заповнити його 50 непарними числами за допомоги циклу.\
// let odd = 1;
// let arr = [];
// for (let i = 1; i < 51; i++) {
//     arr.push(odd);
//     odd += 2;
// }
// console.log(arr);


// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// let odd = 0;
// let arr = [];
// for (let i = 1; i < 51; i++) {
//     arr.push(odd);
//     odd += 2;
// }
// console.log(arr);
// 2. заповнити його 50 непарними числами за допомоги циклу.
// let odd = 1;
// let arr = [];
// for (let i = 1; i < 51; i++) {
//     arr.push(odd);
//     odd += 2;
// }
// console.log(arr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let arr = [];
// for (let i = 0; i < 50; i++) {
//
//     arr.push(Math.round(Math.random() * 100));
//
// }
// console.log(arr)

//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr = [];
// for (let i = 0; i < 50; i++) {
//
//     arr.push(Math.round(Math.random() * 732) + 8);
//
// }
// console.log(arr)

// 2. вывести на консоль  каждый третий елемент
//let arr = [1,2,3,4,5,6,7,8,9,10,11];
//for(let i = 0; i<arr.length; i+=3){
//  console.log(arr[i]);
//}
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
//let arr = [1,2,4,3,5,6,7,8,9,10];
//for(let i = 0; i<arr.length; i+=3){
//  if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
// }
//}


// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// let arr = [1,2,4,3,5,6,8,32,80,10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr);
// let newArr = [];
// for(let i = 0; i<arr.length; i+=3){
//     if (arr[i] % 2 === 0) {
//
//
//         newArr.push(arr[i]);
//
//     }
// }
// console.log(newArr);


// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i +2] % 2 === 0){
//         console.log(arr[i]);
//     }
// }

// масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//  let price = [100, 250, 50, 168, 120, 345, 188];
//  let sum = 0;
//  let avr = 0;
//  for (let i = 0; i < price.length; i++) {
//      sum += price[i];
//
//  }
//  avr = sum / price.length;
//  console.log(avr);
//
//

//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [1,2,3,4,5,];
// console.log('old '+arr)
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] *=5;
//     newArr.push(arr[i]);
//
//
// }
//
// console.log('new '+newArr);




// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let arr = [1,2,3,'css','html'];
// console.log('old arr - '+ arr)
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "number"){
//         newArr.push(arr[i]);
//     }
//
// }
// console.log('newArr - '+ newArr);