<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-filed" ref="formFiled">
      <input type="text" class="form-input" placeholder=" " ref="refTitle" id="title" name="title" />
      <label for="" class="form-label">Title</label>
      <label for="" class="label-name">Title</label>
    </div>
    <div class="form-filed">
      <textarea class="form-input" placeholder=" " ref="refDesc"></textarea>
      <label for="" class="form-label">Description</label>
      <label for="" class="label-name">Description</label>
    </div>
    <div class="form-filed">
      <input type="url" class="form-input" placeholder=" " ref="refLink" id="link" name="link" />
      <label for="" class="form-label">Link</label>
      <label for="" class="label-name">Link</label>
    </div>
    <button class="form-btn" type="submit">add Resource</button>
  </form>
</template>
<script>
export default {
  name: "AddResource",
  inject: ["addresource"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    submit() {
      let title = this.$refs.refTitle.value;
      let desc = this.$refs.refDesc.value;
      let link = this.$refs.refLink.value;
      // const regex = RegExp("^(https?:\\/\\/)?" + "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + "((\\d{1,3}\\.){3}\\d{1,3}))" + "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + "(\\?[;&a-z\\d%_.~+=-]*)?" + "(\\#[-a-z\\d_]*)?$", "i");
      // const regex = "((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";
      // const regex = "(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)";
      title.trim() === "" ? (this.$refs.refTitle.style = `border-color:red`) : (this.$refs.refTitle.style = `border-color:none`);
      desc.trim() === "" ? (this.$refs.refDesc.style = `border-color:red`) : (this.$refs.refDesc.style = `border-color:none`);
      link.trim() === "" ? (this.$refs.refLink.style = `border-color:red`) : (this.$refs.refLink.style = `border-color:none`);
      if (title.trim() !== "" && desc.trim() !== "" && link.trim() !== "") {
        this.addresource(title, desc, link);
        this.$refs.refTitle.value = "";
        this.$refs.refDesc.value = "";
        this.$refs.refLink.value = "";
      }
    },
  },
};
</script>
<style>
input,
textarea {
  outline: none;
  background-color: white;
}
.form-filed:nth-child(2) {
  top: 70px;
}
.form-filed:nth-child(2) > textarea {
  height: 100px;
}
.form-filed:nth-child(3) {
  top: 120px;
}
.form {
  width: 700px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  border-radius: 20px;
  height: 500px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.label-name {
  display: block;
  width: max-content;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
  color: black;
  margin-left: 15px;
  position: absolute;
  top: -30px;
  transition: all 0.25s linear;
  opacity: 1;
  visibility: visible;
}
.form-filed {
  position: relative;
  margin: 0 30px;
}
.form-input {
  width: 100%;
  padding: 10px 20px;
  height: 50px;
  border-radius: 10px;
  margin-left: 0;
  border: 2px solid #bbb;
  transition: all 0.25s linear;
}
.form-input:focus {
  border-color: #6a5af9;
}

.form-label {
  position: absolute;
  top: 25px;
  left: 20px;
  transform: translateY(-50%);
  user-select: none;
  pointer-events: none;
  color: #ccc;
  font-size: 18px;
  transition: all 0.25s linear;
}
.form-input:not(:placeholder-shown) + .form-label,
.form-input:focus + .form-label {
  background-color: white;
  color: #6a5af9;
  padding: 0 5px;
  top: 0px;
}
.form-input:not(:placeholder-shown) ~ .label-name,
.form-input:focus ~ .label-name {
  opacity: 0;
  visibility: hidden;
}
.form-btn {
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
.error {
  color: red;
  display: none;
}
.error.active {
  display: block;
  background-color: none;
}
</style>
