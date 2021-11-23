<template>
  <ul class="resources-list">
    <div v-if="clearAll">
      <button @click="deleteAllResource" class="btn-clear-all">clear All</button>
    </div>

    <learn-resource v-for="(resource, index) in resources" :key="index" :title="resource.title" :desc="resource.desc" :link="resource.link"></learn-resource>
  </ul>
</template>
<script>
import LearnResource from "./LearnResource.vue";

export default {
  components: { LearnResource },
  name: "StoredResources",
  inject: ["StoredResources", "deleteAllResource"],
  data() {
    return {
      clearAll: false,
    };
  },
  props: {
    resources: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    resources() {
      if (this.resources.length > 1) {
        this.clearAll = true;
      } else {
        this.clearAll = false;
      }
    },
  },
};
</script>
<style>
.resources-list {
  display: block;
  width: 100%;
  margin: 0 auto;
  height: 500px;
  overflow-y: auto;
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
.resource-button,
.btn-clear-all {
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
