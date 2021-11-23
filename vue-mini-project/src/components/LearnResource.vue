<template>
  <li class="resource-item">
    <div class="resource-content">
      <h2 class="resource-title">title:{{ title }}</h2>
      <p class="resource-desc">desc:{{ desc }}</p>
      <a href="" class="resource-link">link:{{ link }}</a>
    </div>
    <div class="resource-remove">
      <button class="resource-button" @click="deleteResource(title)">xóa</button>
    </div>
  </li>
</template>
<script>
export default {
  inject: ["deleteResource"],
  name: "LearnResource",
  props: ["title", "desc", "link"],
  methods: {},
};
</script>
<style>
.resource-item {
  width: 700px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin: 20px auto 0;
}
.resource-content {
  width: 80%;
}
.resource-title {
  text-transform: uppercase;
}
.resource-desc {
  text-align: justify;
  margin: 10px 0;
}
.resource-remove {
  width: 20%;
}
.resource-button {
  width: max-content;
  outline: none;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: #6a5af9;
  display: block;
  margin: auto auto 0;
  cursor: pointer;
  font-size: 18px;
  border-radius: 10px;
}
</style>
