const menu = prompt("Що ви будете пити: каву, чай чи сік?").toLowerCase();
switch (menu) {
  case "каву":
    alert("Ви обрали каву, з Вас 45грн");
    break;
  case "кава":
    alert("Ви обрали каву, з Вас 45грн");
    break;
  case "чай":
    alert("Ви обрали чай, з Вас 25грн");
    break;
  case "сік":
    alert("Ви обрали сік, з Вас 35грн");
    break;
  default:
    alert("Ви обрали позицію не з нашого меню або неправильно написали слово");
    break;
}

const dayOfWeek = prompt("Введіть день тижня").toLowerCase();
let day;
let meanOfDay;
switch (dayOfWeek) {
  case "понеділок":
    day = "понеділок";
    meanOfDay = "робочий";
    alert(`Ви обрали ${day} і це ${meanOfDay} день`);
    break;
  case "вівторок":
    day = "вівторок";
    meanOfDay = "робочий";
    alert(`Ви обрали ${day} і це ${meanOfDay} день`);
    break;
  case "середа":
    day = "середа";
    meanOfDay = "робочий";
    alert(`Ви обрали ${day} і це ${meanOfDay} день`);
    break;
  case "четвер":
    day = "четвер";
    meanOfDay = "робочий";
    alert(`Ви обрали ${day} і це ${meanOfDay} день`);
    break;
  case "п'ятниця":
    day = "п'ятниця";
    meanOfDay = "робочий";
    alert(`Ви обрали ${day} і це ${meanOfDay} день`);
    break;
  case "субота":
    day = "субота";
    meanOfDay = "вихідний";
    alert(`Ви обрали ${day} і це ${meanOfDay} день`);
    break;
  case "неділя":
    day = "неділя";
    meanOfDay = "вихідний";
    alert(`Ви обрали ${day} і це ${meanOfDay} день`);
    break;
  default:
    alert("Ви ввели не день тижня або неправильно написали слово");
    break;
}

let numberOfMounth = prompt("Введіть номер місяця");
let nameOfMounth;
let season;

if (numberOfMounth.length < 2) {
  numberOfMounth = numberOfMounth.padStart(2, "0");
}

switch (numberOfMounth) {
  case "01":
    nameOfMounth = "січень";
    season = "зима";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "02":
    nameOfMounth = "лютий";
    season = "зима";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "03":
    nameOfMounth = "березень";
    season = "весна";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "04":
    nameOfMounth = "квітень";
    season = "весна";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "05":
    nameOfMounth = "травень";
    season = "весна";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "06":
    nameOfMounth = "червень";
    season = "літо";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "07":
    nameOfMounth = "липень";
    season = "літо";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "08":
    nameOfMounth = "серпень";
    season = "літо";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "09":
    nameOfMounth = "вересень";
    season = "осінь";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "10":
    nameOfMounth = "жовтень";
    season = "осінь";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "11":
    nameOfMounth = "листопад";
    season = "осінь";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  case "12":
    nameOfMounth = "грудень";
    season = "зима";
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і це ${season}`
    );
    break;
  default:
    alert("Ви ввели не номер місяця");
    break;
}

let numberOfDaysInMounth;

switch (numberOfMounth) {
  case "01":
    numberOfDaysInMounth = 31;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "02":
    numberOfDaysInMounth = 28;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "03":
    numberOfDaysInMounth = 31;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "04":
    numberOfDaysInMounth = 30;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "05":
    numberOfDaysInMounth = 31;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "06":
    numberOfDaysInMounth = 30;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "07":
    numberOfDaysInMounth = 31;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "08":
    numberOfDaysInMounth = 31;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "09":
    numberOfDaysInMounth = 30;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "10":
    numberOfDaysInMounth = 31;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "11":
    numberOfDaysInMounth = 30;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  case "12":
    numberOfDaysInMounth = 31;
    alert(
      `Ви обрали ${nameOfMounth} за номером місяця ${numberOfMounth} і у ньому ${numberOfDaysInMounth} днів`
    );
    break;
  default:
    alert("Ви ввели не номер місяця");
    break;
}

const color = prompt("Введіть назву кольору").toLowerCase();
switch (color) {
  case "червоний":
    alert("Стоп");
    break;
  case "жовтий":
    alert("Чекати");
    break;
  case "зелений":
    alert("Йти");
    break;
  default:
    alert(
      "Ви ввели не колір червоний, жовтий чи зелений або неправильно написали слово"
    );
    break;
}
const num1 = Number(prompt("Введіть перше число"));
const num2 = Number(prompt("Введіть друге число"));
const sign = prompt("Ввеліть знак для обчислення дії");

if (sign == "/" && num2 == 0) {
  alert("Попередження про ділення на нуль");
}

switch (sign) {
  case "+":
    alert(`Відповідь: ${num1 + num2}`);
    break;
  case "-":
    alert(`Відповідь: ${num1 - num2}`);
    break;
  case "*":
    alert(`Відповідь: ${num1 * num2}`);
    break;
  case "/":
    alert(`Відповідь: ${num1 / num2}`);
    break;
  default:
    alert("Ви ввели не число або ввели не знак обчислення");
    break;
}
