<template>
  <div style="width: 100%;height: 100%">
    <div class="star" v-if="showStar">
      <p>
        <span :style="{ color: color }">硬件环境：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
      <p>
        <span :style="{ color: color }">车流量：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
      <p>
        <span :style="{ color: color }">商户评级：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
    </div>
    <div class="radar" v-if="color !== 'black'">
      <div style="position:absolute;left: -20px;font-size: 18px;">指数：</div>
      <div id="radar"></div>
    </div>
    <show-e-charts ref="showECharts"></show-e-charts>
  </div>
</template>

<script>
import ShowECharts from "../common/showECharts";

export default {
  name: "startAndRadar",
  components: { ShowECharts },
  props: {
    color: {
      type: String,
      default: "white"
    },
    showStar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      option: {
        tooltip: {},
        radar: {
          center: ["55%", "50%"],
          radius: 50,
          indicator: [
            { name: "订单数量", max: 1000 },
            { name: "客单价", max: 500 },
            { name: "均车消费", max: 500 },
            { name: "转化率", max: 100 },
            { name: "坪效", max: 600 }
          ]
        },
        series: [
          {
            name: "指数",
            type: "radar",
            data: [
              {
                value: [500, 90, 200, 80, 85, 90]
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    initCharts() {
      let charts = this.$echarts.init(document.getElementById("radar"));
      charts.setOption(this.option);
    }
  },
  mounted() {
    this.initCharts();
  }
};
</script>

<style scoped lang="less">
.star {
  position: absolute;
  font-size: 14px;
  left: 15px;
  top: 35px;
  width: 250px;

  p {
    width: 200px;
    height: 100%;
    overflow: hidden;
  }

  span {
    width: 70px;
    color: white;
    float: left;
    text-align: right;
    line-height: 20px;
  }

  /deep/ .el-rate {
    float: left;
    width: 48px;
  }

  /deep/ .el-rate > .el-rate__item > .el-rate__icon {
    font-size: 16px;
    margin-right: 0;
    line-height: 20px;
  }
}

.radar {
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  height: 200px;

  #radar {
    width: 200px;
    height: 200px;
  }
}
</style>
