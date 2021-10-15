let listImage = document.querySelectorAll(".img-container img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal img");
listImage.forEach((element) => {
  element.addEventListener("click", () => {
    //   open modal
    modal.classList.add("open");
    //  get attribute of img
    let attrImg = element.getAttribute("src");
    // set attribute of img  for modalImg
    modalImg.setAttribute("src", attrImg);
  });
});
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  }
});

// 4.1
let navLink = document.querySelectorAll(".nav-link");
navLink.forEach((element) => {
  element.addEventListener("click", () => {
    let attr = element.getAttribute("attr-id");
    console.log(attr);
    document.getElementById(attr).scrollIntoView({ behavior: "smooth", inline: "nearest" });
  });
});

// bài 4.2
let btn = document.querySelector(".btn-color");
let body = document.body;
let valueColor = document.querySelector(".value-color");
btn.addEventListener("click", () => {
  let color1 = Math.floor(Math.random() * 255);
  let color2 = Math.floor(Math.random() * 255);
  let color3 = Math.floor(Math.random() * 255);
  let color = `rgba(${color1},${color2},${color3})`;
  let btn = document.querySelector(".btn-color");
  body.style.backgroundColor = color;
  valueColor.textContent = color;
});
