function getMaxDigit(number) {
  number = String(number);
  let maxDigit = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > maxDigit) {
      maxDigit = number[i];
    }
  }
  return maxDigit;
}

function numberToPower(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * number;
  }
  return result;
}

function toUpperCase(word) {
  let newWord = word[0].toUpperCase() + word.toLowerCase().slice(1);
  return newWord;
}

function salaryWithoutTax(salary, firstTax, secondTax) {
  salary = salary - (salary / 100) * (firstTax + secondTax);
  return salary;
}

function getRandomNumber(N, M) {
  let randomNumber = (Math.random() * (M - N) + N).toFixed();
  return randomNumber;
}

function countLetter(letter, message) {
  let counter = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i].toLowerCase() == letter.toLowerCase()) {
      counter++;
    }
  }
  return counter;
}

function convertCurrency(currency) {
  let result;
  currency = currency.toUpperCase();
  if (currency.includes('$')) {
    result = +currency.slice(0, currency.indexOf('$')) * 40 + 'UAH';
  } else if (currency.includes('UAH')) {
    result = +currency.slice(0, currency.indexOf('UAH')) / 40 + '$';
  } else return 'I can convert only UAH and $';
  return result;
}

function getPassword(passwordLength = 8) {
  let result = '';
  for (let i = 0; i < passwordLength; i++) {
    result += (Math.random() * 10).toFixed().toString();
  }
  return result;
}

function deleteLetters(letter, message) {
  let result = '';
  for (let i = 0; i < message.length; i++) {
    message[i] == letter ? result : (result += message[i]);
  }
  return result;
}

function isPalyndrom(palydrom) {
  palydrom = palydrom.toLowerCase().split(' ').join('');
  return palydrom === palydrom.split('').reverse().join('') ? true : false;
}

function deleteDuplicateLetter(message) {
  message = message.toLowerCase().split(' ').join('');
  let result = '';
  for (let i = 0; i < message.length; i++) {
    message.indexOf(message[i]) != message.lastIndexOf(message[i])
      ? result
      : (result += message[i]);
  }
  return result;
}

//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
const firstFunctionNamber = 2135468510;
document.writeln('1. getMaxDigit(number) : <br>');
document.writeln(
  `Найбільша цифра в числі ${firstFunctionNamber} = ${getMaxDigit(firstFunctionNamber)}<br><br>`,
);

//Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
document.writeln('2. numberToPower(number, power) : <br>');
const number = 3;
const power = 3;
document.writeln(`Число ${number} в степені ${power} = ${numberToPower(number, power)}<br><br>`);

//Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

const wordToFormat = 'вЛАД';
document.writeln('3. toUpperCase(word) : <br>');
document.writeln(`Перша буква велика "${wordToFormat}" -> "${toUpperCase(wordToFormat)}"<br><br>`);

//Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

document.writeln('4. salaryWithoutTax(salary , firstTax, secondTax) : <br>');
const salary = 20000;
const firstTax = 17;
const secondTax = 4.5;

document.writeln(
  `Зарплата ${salary} враховуючи податки: ${firstTax}, ${secondTax} = ${salaryWithoutTax(
    salary,
    firstTax,
    secondTax,
  )}<br><br>`,
);

//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

document.writeln('5. getRandomNumber(N, M) : <br>');
const N = 4;
const M = 21;
document.writeln(`Рандомне число в діапазоні [${N}, ${M}] = ${getRandomNumber(N, M)}<br><br>`);

//Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

document.writeln('6. countLetter(letter, message) : <br>');
const letter = 'а';
const message = 'Асталавіста';
document.writeln(`В "${message}" ${countLetter(letter, message)} букв(-и) "${letter}"<br><br>`);

//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$

document.writeln('7. convertCurrency(currency) : <br>');
let currency = '100$';
document.writeln(`${currency} = ${convertCurrency(currency)}<br>`);
currency = '1000UAH';
document.writeln(`${currency} = ${convertCurrency(currency)}<br>`);
currency = '100EUR';
document.writeln(`${currency} = ${convertCurrency(currency)}<br><br>`);

//Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

document.writeln('8. getPassword(passwordLength) : <br>');
const passwordLength = 6;
document.writeln(`Пароль ${passwordLength} символів = ${getPassword(passwordLength)}<br><br>`);

//Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
document.writeln('9. deleteLetters(letter, message) : <br>');
const letterToDelete = 'b';
const messageToDelete = 'blablabla';
document.writeln(
  `"${messageToDelete}" без букви '${letterToDelete} -> "${deleteLetters(
    letterToDelete,
    messageToDelete,
  )}"<br><br>`,
);

//Створіть функцію, яка перевіряє, чи є слово паліндромом.
document.writeln('10. isPalyndrom(palydrom) : <br>');
const palydrom = 'Я несу гусеня';
document.writeln(`Чи є "${palydrom}" паліндромом: "${isPalyndrom(palydrom)}"<br><br>`);

//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
document.writeln('11. deleteDuplicateLetter(message) : <br>');
const dublicatemessage = 'Бісквіт був дуже ніжним';
document.writeln(
  `"${dublicatemessage}" без букв, які повторюються більше 1 разу ->"${deleteDuplicateLetter(
    dublicatemessage,
  )}"`,
);
