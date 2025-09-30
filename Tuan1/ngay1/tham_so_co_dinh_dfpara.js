//Default Parameters (Tham số mặc định)
function greet(name = "Nhựt") {
  console.log(`Hello, ${name}!`);
}
greet(); // sẽ in ra: Hello, Nhựt!
greet("Minh"); // sẽ in ra: Hello, Minh!
