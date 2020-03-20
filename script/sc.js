// // Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
//   Завдання № 1

let howOld = prompt("How old are you ?");
if (howOld > 18 && howOld <= 60) {
  alert("Ти дорослий");
} else if (howOld > 12 && howOld <= 18) {
  alert("ТИ підліток");
} else if (howOld > 0 && howOld <= 2) {
  alert("Ти немовля");
} else if (howOld > 60) {
  alert(" Ти Пенсійного віку");
} else {
  alert("Ти точно ввів свій вік ?");
}

//   Завдання № 2
// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let getNumberFromUser = prompt("Please enter a number between 0 and 9");

if (getNumberFromUser == 1) {
  alert("!");
} else if (getNumberFromUser == 2) {
  alert("@");
} else if (getNumberFromUser == 3) {
  alert("#");
} else if (getNumberFromUser == 4) {
  alert("$");
} else if (getNumberFromUser == 5) {
  alert("%");
} else if (getNumberFromUser == 6) {
  alert("^");
} else if (getNumberFromUser == 7) {
  alert("&");
} else if (getNumberFromUser == 8) {
  alert("*");
} else if (getNumberFromUser == 9) {
  alert("(");
} else if (getNumberFromUser == 0) {
  alert(")");
} else {
  alert("You entered incorrect data");
}

//   Завдання № 3

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let getThreeDigit = prompt("Enter a three-digit number");

let first1 = getThreeDigit[0];

let second2 = getThreeDigit[1];

let third3 = getThreeDigit[2];

if ((first1 == second2) == third3) {
  alert("Here all the numbers are the same " + getThreeDigit);
} else if (first1 == second2) {
  alert(
    `"only the first (${first1}) and second (${second2}) digits are the same"`
  );
} else if (first1 == third3) {
  alert(
    `"only the first (${first1}) and third (${thirdNum}) digits are the same"`
  );
} else if (second2 == third3) {
  alert(
    `"only the second (${second2}) and third (${third3}) digits are the same"`
  );
} else {
  alert("Одинакових цифр нема");
}

// Завдання № 4
// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.сссссссссссссссссссссссссссссссссссссссссссссссссссссссссс

let getYear = prompt("Write the year");

let vusokosnuy4 = getYear % 4;
let no100 = getYear % 100;

// alert(`400=${vusokosnuy400} 4=${vusokosnuy4} 100=${no100}`);

if (no100 != 0) {
  alert("умова - рік має бути не кратним 100");
}

if (vusokosnuy4 == 0) {
  alert("Рік високосний " + getYear);
} else {
  alert("Рік НЕ високосний " + getYear);
}

// Завдання № 5
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let fiveDigits = prompt("Напиши 5 цифр");

let digit0 = fiveDigits[0];
let digit1 = fiveDigits[1];
let digit2 = fiveDigits[2];
let digit3 = fiveDigits[3];
let digit4 = fiveDigits[4];

if (digit0 == digit4 && digit1 == digit3) {
  alert("так це поліндром");
} else {
  alert("Не поліндром");
}

// Завдання № 6

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let how$ = prompt("Введіть кількість $");
let valuta = prompt(
  "Яку валюти бажаєте придбати?",
  " Напишіть один з варіантів: EUR, UAH, RUB - великими літерами"
);

let grn = 27.37;
const euro = 30;
let rub = 79.68;

if (valuta == "EUR") {
  alert("Отримаєте " + (how$ * grn) / 30);
}

if (valuta == "UAH") {
  alert("Отримаєте UAH " + how$ * grn);
}

if (valuta == "RUB") {
  alert("Отримаєте RUB " + how$ * rub);
}

// Завдання № 7

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let howCost = prompt("Введіть суму покупки");

if (howCost < 200) {
  alert(
    "Вибачте, сума покупки менша 200, у знижці відмовлено. Сума до оплати " +
      howCost
  );
} else if (howCost > 200 && howCost < 300) {
  alert("Знижка 3% - до оплати " + howCost * 0.97);
} else if (howCost > 300 && howCost < 500) {
  alert("Знижка 5% - до оплати " + howCost * 0.95);
} else if (howCost >= 500) {
  alert("Знижка 7% - до оплати " + howCost * 0.93);
}

// Завдання № 8

let circleLength = prompt("Введіть довжину кола:");
let squarePerimetr = prompt("Введіть периметр квадрата:");
if (squarePerimetr / 4 >= circleLength / Math.PI) {
  alert("Коло може вміститися всередині квадрата");
} else {
  alert("Коло не може вміститися всередині квадрата");
}

// Завдання № 9

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

let counter = 0;

let firstQ = prompt(
  "Для чого ти вивчаєш програмування ? 1 - Мізків хватає ?))",
  "2 - Ради задоволенняю, 3 - Всі туди ну і я...))) 4 - Щоб заробити всі гроші на планеті"
);
if (firstQ == "4") {
  counter = counter + 2;
}
// if (firstQ == "2") {
//   alert(" Ради задоволення ? - Ти серйозно ?");
// }
let thirdQ = prompt(
  "Що важливіше ? ",
  " 1 - стосунки, 2 - фінанси, 3 - духовний розвиток"
);
if (thirdQ == "2") {
  counter = counter + 2;
}

let secondQ = prompt(
  "Як вважаєте, що більш ймовірніше ? Виграти у лотерейний джекпот чи те, що по дорозі до магизину за тим білетом вас вб'ють ?",
  " 1 - виграти, 2 - вб'ють, 3 - А я везучий)))"
);
if (secondQ == "2") {
  counter = counter + 2;
}

alert(`Ти набрав ${counter} балів.`);
