<template>
  <div class="grid-container" id="gradl">
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
    <div class="grid-item">box</div>
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
.grid-container {
  display: grid;
  grid-column-gap: 200px;
  grid-template-columns: auto auto auto auto;
  background-image: linear-gradient(to left,pink,rgb(243, 243, 151));
  padding: 100px;
  grid-row-gap: 90px;
}

.grid-item {
  background: url("~@/assets/cudedark.gif");
  background-size: 100% 100%;
  border: 1px solid rgba(234, 229, 229, 0.8);
  padding: 30px;
  font-size: 30px;
  text-align: center;
  border-radius: 25px;
}
</style>