<template>
  <div class="text">
    <span style="font-size:180px;color:red">4</span>
    <span style="font-size:180px;color:yellow">0</span>
    <span style="font-size:180px;color:blue">3</span>
  </div>
</template>

<script>
export default {
  name: "error",
  mounted() {
    document.cookie = "menu=";
  }
};
</script>

<style scoped lang="less">
.text {
  background: #99a9bf;
  position: fixed;
  width: 100%;
  height: 100%;
  line-height: 100vh;
  text-align: center;
}
</style>
