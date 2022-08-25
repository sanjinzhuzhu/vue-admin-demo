<template>
  <div class="grid-container" id="gradl">
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
  </div>
</template>

<script>
import MyLearning from "@/views/MyZone/MyLearning";
import WorkSpace from "@/views/MyZone/WorkSpace";
export default {
  name: "",
  components: {
    MyLearning,
    WorkSpace,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.grid-container {
  display: grid;
  /* display: grid; */
  grid-column-gap: 200px;
  grid-template-columns: auto auto auto auto;
  background-image: linear-gradient(to left, pink, rgb(243, 243, 151));
  padding: 100px;
  grid-row-gap: 90px;
}

.grid-item {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background: url("~@/assets/cudedark.gif");
  background-size: 100% 100%;
  border: 1px solid rgba(234, 229, 229, 0.8);
  padding: 50px;
  text-align: center;
  border-radius: 25px;
}
</style>