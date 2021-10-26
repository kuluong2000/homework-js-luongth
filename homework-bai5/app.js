const app = Vue.createApp({
  data() {
    return {
      imgcontent: "img-container",
      activeClass: { open: false },
      srcImg: "img/full/1.jpg",
      color: "255,255,255",
    };
  },
  methods: {
    imgClick(e) {
      let srcAttr = e.target.getAttribute("src");
      this.activeClass = { open: true };
      this.srcImg = srcAttr;
    },
    closeModal(e) {
      let modal = document.querySelector(".modal");
      if (e.target.contains(modal)) {
        this.activeClass = { open: false };
      }
    },
    changeColor() {
      let colors = `${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
      // console.log("rgba(" + colors + ")");
      document.body.style.backgroundColor = `rgba(${colors})`;
      this.color = colors;
    },
  },
});
app.mount("#wrapper");
