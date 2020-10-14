<template>
  <div class="body">
    <div class="container">
      <div class="con">
        <div class="H_top">
          <div class="H_top_left">
            <HomeTopLeft></HomeTopLeft>
          </div>
          <div class="H_top_center">
            <center-map></center-map>
          </div>
          <div class="H_top_right">
            <HomeTopRight></HomeTopRight>
          </div>
        </div>
        <div style="height: 2%;width: 100%"></div>
        <div class="H_bottom">
          <home-bottom></home-bottom>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeTopLeft from "./EChartsFiles/HomeTopLeft";
import CenterMap from "./map/centerMap";
import HomeTopRight from "./EChartsFiles/HomeTopRight";
import HomeBottom from "./EChartsFiles/HomeBottom";

export default {
  name: "Home",
  components: { HomeBottom, HomeTopRight, CenterMap, HomeTopLeft }
};
</script>

<style scoped lang="less">
.body {
  width: 100%;
  height: 100%;
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
  position: fixed;

  .container {
    width: 100%;
    height: 100%;
    background: url("../assets/head.png") no-repeat;
    background-size: 100%;
    overflow: hidden;

    .con {
      width: 97%;
      height: 90%;
      margin: 5% 1.5% 0;

      .H_top {
        height: 78%;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;

        .H_top_left {
          width: 15%;
          height: 100%;
        }

        .H_top_center {
          width: 55%;
          height: 100%;
        }

        .H_top_right {
          width: 28%;
          height: 100%;
        }
      }

      .H_bottom {
        height: 20%;
        width: 100%;
      }
    }
  }
}
</style>
