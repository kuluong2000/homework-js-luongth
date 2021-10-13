// 1. Tạo Array với các số bất kỳ, tính tổng các số trong array, in ra màn hình html
const bai1 = document.querySelector("#bai1");
let arr1 = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum = sum + arr1[i];
  bai1.innerText = `${sum}`;
}

//2. Tạo Array với các chuỗi string bất kỳ, lặp và in ra màn hình html tương ứng với mỗi thẻ <p>. Ví dụ: ['haha', 'hehe'] ->
/* <p>haha</p> 
<p>hehe</p> */
const bai2 = document.querySelector("#bai2");

let arrStr = ["haha", "hehe", "hoho", "kiki"];
for (let i = 0; i < arrStr.length; i++) {
  bai2.innerHTML += `<p>${arrStr[i]}</p>`;
}

// 2.2 Add thêm 1 thẻ <p> với text bất kỳ thêm vào ở đầu và ở cuối. ví dụ:
/* <p>insert ở đầu</p> // Gợi ý: dùng .insertBefore
<p>haha</p> 
<p>hehe</p>
<p>insert ở cuối</p> // Gợi ý: dùng .appendChild */
let p1 = document.createElement("p");
p1.innerHTML = "insert ở đầu";
bai2.insertBefore(p1, document.querySelector("p"));
let p2 = document.createElement("p");
p2.innerHTML = "insert ở cuối nè";
bai2.appendChild(p2);

//3. Tạo 1 button với sự kiện onclick, khi user bấm vào thì ẩn hiện text bất kỳ, thay đổi background của màn hình.

let btn = document.querySelector(".btn");
let body = document.querySelector("body");

btn.addEventListener("click", changeColor);
let colors = ["#ffa400", "#00aefd", "#07a787", "#ffb86c", "#2979ff", "#e74c3c"];
function changeColor() {
  let color = colors[Math.floor(Math.random() * colors.length)];

  body.style.backgroundColor = color;
  console.log(color);
}
// 3.2 Tạo thêm 1 button với text "Bảo trì" và sự kiện ondblclick, khi bấm vào thì ẩn hiện tất cả UI trên trang, show text "Page bảo trì".
let main = document.querySelector("main");
let h1 = document.createElement("h1");

h1.innerText = " Trang đang được bảo trì";
body.appendChild(h1);
h1.style.display = "none";
let btn2 = document.querySelector(".btn2");
btn2.addEventListener("dblclick", () => {
  main.style.display = "none";
  h1.style.display = "block";
});

/*
4. Bài tập nhỏ: Tạo 1 gallery popup đơn giản
Link source: https://drive.google.com/drive/folders/19MM0LoGycRFIPpw714JrjgoRfJjLUsBU?usp=sharing
Yêu cầu xử lý: khi click vào thì show popup với hình ảnh tương ứng ở attribute alt (Thêm class open ở thẻ <div class="modal"> để xem ví dụ)
 */

//  bài này hiện tại e chưa có ý tưởng làm, e sẽ làm và update lại sau
