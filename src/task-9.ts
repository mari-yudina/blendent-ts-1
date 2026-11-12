// Завдання:

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів
// контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно
// для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}
const numberContainer: Container<number> = {
  items: [3, 5, 7],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
const stringContainer: Container<string> = {
  items: ["Tom", "Roy", "Bob"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

function getLastElement<T>(container: Container<T>): T {
  return container.items[container.items.length - 1];
}

numberContainer.addItem(8);
log(numberContainer.getItem(2));
log(numberContainer.getItem(15)); //undefined
stringContainer.addItem("Lena");
log(stringContainer.getItem(2));

console.log("getLastElement", getLastElement(numberContainer));
console.log("getLastElement", getLastElement(stringContainer));

console.log("stringContainer", stringContainer.getItem(1));
console.log("stringContainer", stringContainer.items);
