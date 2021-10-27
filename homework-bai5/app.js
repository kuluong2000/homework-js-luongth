const app = Vue.createApp({
  data() {
    return {
      imgcontent: "img-container",
      activeClass: { open: false },
      srcImg: "img/full/1.jpg",
      color: "",

      images: [
        {
          image: "img/small/pexels-anna-shvets-4588065.jpg",
          bigImage: "img/small/pexels-anna-shvets-4588065.jpg",
        },
        {
          image: "img/small/pexels-anthony-139639.jpg",
          bigImage: "img/small/pexels-anthony-139639.jpg",
        },
        {
          image: "img/small/pexels-burst-374825.jpg",
          bigImage: "img/small/pexels-burst-374825.jpg",
        },
        {
          image: "img/small/pexels-carlos-spitzer-17811.jpg",
          bigImage: "img/small/pexels-carlos-spitzer-17811.jpg",
        },
        {
          image: "img/small/pexels-charles-1851164.jpg",
          bigImage: "img/small/pexels-charles-1851164.jpg",
        },
        {
          image: "img/small/pexels-frans-van-heerden-631292.jpg",
          bigImage: "img/small/pexels-frans-van-heerden-631292.jpg",
        },
        {
          image: "img/small/pexels-gratisography-4602.jpg",
          bigImage: "img/small/pexels-gratisography-4602.jpg",
        },
        {
          image: "img/small/pexels-jan-kopřiva-3614358.jpg",
          bigImage: "img/small/pexels-jan-kopřiva-3614358.jpg",
        },
        {
          image: "img/small/pexels-jeremy-bishop-2422915.jpg",
          bigImage: "img/small/pexels-jeremy-bishop-2422915.jpg",
        },
        {
          image: "img/small/pexels-jim-long-949859.jpg",
          bigImage: "img/small/pexels-jim-long-949859.jpg",
        },
      ],
    };
  },
  methods: {
    imgClick(event) {
      this.activeClass = { open: true };
      this.srcImg = event;
    },
    closeModal(e) {
      this.activeClass.open = !this.activeClass.open;
    },
    noChangeCloseModal() {
      this.activeClass.open = false;
    },
    changeColor() {
      let colors = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
      this.color = colors;
    },
  },
  watch: {
    activeClass(value) {
      console.log(value);
    },
  },
});
app.mount("#wrapper");
