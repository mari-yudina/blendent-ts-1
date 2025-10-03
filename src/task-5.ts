// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.

interface AddParamsUser {
  name: string;
  age: number;
}
interface ReturnParamsUser {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: AddParamsUser): ReturnParamsUser {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));
