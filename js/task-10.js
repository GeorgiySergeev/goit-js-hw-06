// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить,
//коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
//

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//тем самым удаляя все созданные элементы.

const refs = {
  inputAmmount: document.querySelector("input"),
  createElement: document.querySelector("button[data-create]"),
  destroyElement: document.querySelector("button[data-destroy]"),
  boxes: document.getElementById("boxes"),
};
refs.createElement.addEventListener("click", addElement);
refs.destroyElement.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.width = 30 + 10 * i + "px";
    boxEl.style.height = 30 + 10 * i + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    
    refs.boxes.append(boxEl);
  }
}

function addElement() {
  destroyBoxes();
  let amount = refs.inputAmmount.value;

  if (amount > 0) {
    createBoxes(amount);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
