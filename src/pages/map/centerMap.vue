<template>
  <div class="amap-page-container">
    <el-amap
      vid="amapDemo"
      :center="center"
      :zoom="zoom"
      class="amap-demo"
      :events="events"
      :map-style="mapStyle"
      pitch-enable="false"
    >
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :events="marker.events"
        :position="marker.position"
        :icon="marker.icon"
      />
      <el-amap-info-window
        v-if="window"
        :position="window.position"
        :visible="window.visible"
        :content="window.content"
        :offset="window.offset"
        :close-when-click-map="true"
        :is-custom="true"
      >
        <div id="info-window">
          <p style="line-height: 30px;text-align: center">
            {{ window.address }}
          </p>
          <p
            style="text-align: center;font-size: 20px;font-weight: 700"
            v-for="i in 3"
          >
            {{ i }}+XXXXXXXXXXX
          </p>
        </div>
      </el-amap-info-window>
    </el-amap>
  </div>
</template>

<script>
export default {
  name: "centerMap",
  data() {
    return {
      data: [
        {
          position: "114.286298, 30.5855",
          address: "循礼门"
        },
        {
          position: "114.285955, 30.579367",
          address: "民主一街"
        }
      ],
      zoom: 10,
      center: [114.286298, 30.5855],
      expandZoomRange: true,
      markers: [],
      windows: [],
      window: "",
      events: {},
      mapStyle: "amap://styles/8cb6df918ee512eae9c9198c38a40c91"
    };
  },
  mounted() {
    this.point();
  },
  methods: {
    point() {
      const markers = [];
      const windows = [];
      const that = this;
      this.data.forEach((item, index) => {
        markers.push({
          position: item.position.split(","),
          events: {
            click() {
              // 方法：鼠标移动到点标记上，显示相应窗体
              that.windows.forEach(window => {
                window.visible = false; // 关闭窗体
              });
              that.window = that.windows[index];
              that.$nextTick(() => {
                that.window.visible = true;
              });
            }
          },
          icon:
            "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png"
        });
        windows.push({
          position: item.position.split(","),
          isCustom: true,
          offset: [115, 55], // 窗体偏移
          showShadow: false,
          visible: false, // 初始是否显示
          address: item.address
        });
      });
      //  加点
      this.markers = markers;
      // 加弹窗
      this.windows = windows;
    }
  }
};
</script>

<style lang="less" scoped>
.amap-demo {
  height: 99.7%;
  width: 100%;
}

.amap-page-container {
  width: 100%;
  height: 100%;
}

#info-window {
  width: 211px;
  height: 146px;
  margin-left: 30px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  .detail {
    width: 100%;
    height: 24px;
    color: #fff;
    background-color: #1a73e8;
    position: absolute;
    bottom: 0;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
