// rest operator (...) dùng thu thập các đối số còn lại vào một mảng.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // In ra 10

//spread operator (...) dùng mở rộng mảng hoặc đối tượng.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // In ra [1, 2, 3, 4, 5]
