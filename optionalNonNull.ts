// optional and non null
const add = (a: number, b?: number) => (b ? a + b : a);

console.log(add(1, 2));
console.log(add(3));

const addNonNull = (a: number, b?: number) => a + b!;
console.log(addNonNull(4, 5));
console.log(addNonNull(4));
