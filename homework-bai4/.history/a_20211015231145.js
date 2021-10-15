const btn_scroll = [
  { content: "Tất cả", box: "all_img" },
  { content: "Sống trên cạn", box: "land" },
  { content: "Sống dưới nước", box: "ocean" },
  { content: "Bay trên trời", box: "sky" },
  { content: "Color", box: "color" },
];
let btn_scroll_node = "";
btn_scroll.map((value) => {
  btn_scroll_node += `<button class="btn btn-primary mx-2" onclick="scroll_to_div(${value.box})">${value.content}</button>`;
});
document.getElementById("btn_scroll").innerHTML = btn_scroll_node;
const scroll_to_div = (value) => {
  value.scrollIntoView({ behavior: "smooth", inline: "nearest" });
};
