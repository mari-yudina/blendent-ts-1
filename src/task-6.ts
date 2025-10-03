// Завдання:

// Створіть тип для user.
// Зробіть address необов язковим.
// Перевірте, що user.address?.city не викликає помилки.

interface User {
  name: string;
  address: Address;
}

interface Address {
  city: string;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

if (!user.address?.city) {
  console.log("помилка: відсутня країна");
}
console.log(user.address?.city);
