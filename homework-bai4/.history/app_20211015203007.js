// BOM: window, location, screen, history

// const modal = document.getElementsByClassName('modal')[0]
// console.log(modal)
// // const imageModal = document.getElementsByClassName('full-img')[0]
// // console.log(imageModal)
// const imageModal = document.querySelector('.full-img')
// console.log(imageModal)

// // Tạo sự kiện click, doi url image va show popup
// // .addEventListener()
// const listImage = document.querySelectorAll('.img-container img')
// console.log(listImage)

// listImage.forEach(element => {
//     element.addEventListener('click', function() {
//         // Open modal
//         modal.classList.add('open')
//         const attrImg = element.getAttribute('alt')
//         // Set new url image
//         imageModal.src = '/img/full/'+attrImg+'.jpg'
//     })
// });

// modal.addEventListener('click',(e) => {
//     if(e.target.classList.contains("modal")) {
//         modal.classList.remove("open");
//     };
// });

// // Demo, làm tiếp yêu cầu scroll
// const elmntToView = document.getElementById("books");
// elmntToView.onclick(function() {
//     elmntToView.scrollIntoView();
// })
let listImage = document.querySelectorAll(".img-container img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector("modal img");
listImage.forEach((element) => {
  element.addEventListener("click", () => {
    //   open modal
    modal.classList.add("open");
    let attrImg = element.getAttribute("src");
    console.log(attrImg);
  });
});
