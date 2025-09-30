// Promises giúp xử lý bất đồng bộ một cách dễ dàng hơn, thay vì sử dụng callback
let isSuccess = true;
let promise = new Promise((resolve, reject) => {
  if (isSuccess) {
    resolve("Đã thành công");
  } else {
    reject("Đã thất bại");
  }
});

promise.then(result => {
  console.log(result); // In ra: Đã thành công
}).catch(error => {
  console.log(error); // In ra: Đã thất bại
});
