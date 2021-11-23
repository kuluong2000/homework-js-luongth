<template>
  <div>
    <Header></Header>
    <tabs></tabs>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tabs from "./components/Tabs.vue";

export default {
  name: "App",
  components: {
    Header,
    Tabs,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400;1,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

#app {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
