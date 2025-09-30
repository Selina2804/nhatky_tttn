// Ví dụ về let
let x = 5; // Biến x ban đầu là 5 
console.log(x); // In ra 5

x = 10; // Thay đổi giá trị biến x thành 10
console.log(x); // Sẽ in ra 10

// Ví dụ về const
const y = 10; // Khai báo biến y cố định là 10
console.log(y) // In ra 10

y=15; // Sẽ lỗi vì vì y được khai báo bằng hàm const hàm đã cố định biến y 

// Ví dụ về const và mảng
const fruits = ["Nho", "Bưởi", "Chuối"]; // Khai báo mảng fruits
console.log(fruits); // Sẽ in ra ["Nho", "Bưởi", "Chuối"]

fruits.push("Mận"); // Thêm một phần tử mới vào mảng được vì dùng hàm push
console.log(fruits); // Sẽ in ra: ["Nho", "Bưởi", "Chuối", "Mận"]

fruits = ["Dưa hấu", "Ổi"]; // Sẽ lỗi vì không thể gán lại mảng vì đã khai báo hàm const

 