// У вас є масив імен користувачів:

// Завдання:

// 1. Створіть типізовану функцію toUserObjects, яка приймає
//  масив рядків (імен користувачів).

// 2. Усередині функції переберіть масив імен та для кожного
//  імені створи обєкт з такими властивостями:

// id — порядковий номер (починаючи з 1),
// name — саме імя користувача (рядок з масиву).
// 3. Функція повинна повертати масив отриманих обєктів.

// 4. Переконайтеся, що результат функції має правильну типізацію,
//  а TypeScript не видає помилок.

// Приклад виклику:

//toUserObjects(users);
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" },
//  { id: 3, name: "charlie" }]

const users = ["alice", "bob", "charlie"];
interface User {
  id: number;
  name: string;
}

function toUserObjects(names: string[]): User[] {
  return names.map((name, index) => name);
}
console.log(toUserObjects(users));
