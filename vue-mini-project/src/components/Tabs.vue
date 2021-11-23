<template>
  <container>
    <template v-slot:tabs>
      <div class="tabs-list">
        <button v-for="tab in tabs" :key="tab.id" @click="this.currentTab = tab.component" class="tab-button" :class="{ active: this.currentTab === tab.component }">{{ tab.title }}</button>
      </div>
    </template>
    <component :is="currentTab" :resources="this.initResource"></component>
  </container>
</template>
<script>
import Container from "./Container.vue";
import AddResource from "./AddResource.vue";
import StoredResources from "./StoredResources.vue";
export default {
  name: "Tabs",
  components: { Container, AddResource, StoredResources },
  provide() {
    return {
      addresource: this.addresource,
      deleteResource: this.deleteResource,
      deleteAllResource: this.deleteAllResource,
    };
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          component: StoredResources,
          title: "Stored Resources ",
        },
        {
          id: 2,
          component: AddResource,
          title: "Add Resources ",
        },
      ],
      currentTab: StoredResources,
      initResource: [],
    };
  },
  methods: {
    getLocalStorage(name) {
      return JSON.parse(localStorage.getItem(name));
    },

    addresource(title, desc, link) {
      let newData = {
        title: title,
        desc: desc,
        link: link,
      };
      this.initResource.push(newData);
      localStorage.setItem("storedData", JSON.stringify(this.initResource));
      location.reload();
    },
    deleteResource(id) {
      let findIndex = this.initResource.findIndex((resId) => resId.title === id);
      this.initResource.splice(findIndex, 1);

      localStorage.setItem("storedData", JSON.stringify(this.initResource));
      // location.reload();
    },
    deleteAllResource() {
      this.initResource = [];
      localStorage.setItem("storedData", JSON.stringify(this.initResource));
    },
  },
  mounted() {
    console.log(this.addresource);
    const resources = this.getLocalStorage("storedData");
    if (resources && resources.length) {
      this.initResource = resources;
    }
  },
};
</script>
<style>
.tabs-list {
  width: 700px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  border-radius: 20px;
  padding: 20px 0;
  margin: 40px auto;
}
.tab-button {
  width: max-content;
  outline: none;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: #6a5af9;
  cursor: pointer;
  font-size: 18px;
  border-radius: 10px;
  margin-right: 30px;
}
.active {
  background-color: red;
}
</style>
