<template>
  <div style="width: 100%;height: 100%">
    <el-table :data="tableData" height="100%" style="width: 99.9%">
      <el-table-column fixed="left" label="序号" align="center" width="50">
        <template slot-scope="scope" align="center">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="a" label="平面图" align="center" width="100px">
        <template slot-scope="scope">
          <el-image
            style="width: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            :preview-src-list="[
              'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            ]"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="b"
        label="名称"
        width="100px"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="c"
        label="方向"
        width="100px"
      ></el-table-column>
      <el-table-column align="center" prop="d" label="JSON"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "pictureList",
  data() {
    return {
      tableData: [
        {
          a:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          b: "安陆服务区",
          c: "西区",
          d: ""
        },
        {
          a:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          b: "安陆服务区",
          c: "西区",
          d: ""
        },
        {
          a:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          b: "安陆服务区",
          c: "西区",
          d: ""
        },
        {
          a:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          b: "安陆服务区",
          c: "西区",
          d: ""
        }
      ]
    };
  },
  mounted() {
    let arr = [
      {
        name: "出口",
        style: {
          width: "75px",
          height: "34px",
          top: "279px",
          left: "139px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "入口",
        style: {
          width: "64px",
          height: "38px",
          top: "280px",
          left: "1013px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "停车区",
        style: {
          width: "82px",
          height: "41px",
          top: "263px",
          left: "871px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "停车区2",
        style: {
          width: "83px",
          height: "47px",
          top: "273px",
          left: "645px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "停车区3",
        style: {
          width: "77px",
          height: "37px",
          top: "287px",
          left: "353px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "加油站",
        style: {
          width: "75px",
          height: "49px",
          top: "220px",
          left: "225px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "卡速宝汽修",
        style: {
          width: "109px",
          height: "44px",
          top: "54px",
          left: "752px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "男厕",
        style: {
          width: "72px",
          height: "74px",
          top: "31px",
          left: "492px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "女厕",
        style: {
          width: "79px",
          height: "76px",
          top: "31px",
          left: "566px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "小圆满厨房",
        style: {
          width: "53px",
          height: "87px",
          top: "86px",
          left: "396px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "小圆满餐厅",
        style: {
          width: "72px",
          height: "68px",
          top: "176px",
          left: "365px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "小圆满仓办",
        style: {
          width: "21px",
          height: "80px",
          top: "177px",
          left: "345px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "驿路香伴",
        style: {
          width: "21px",
          height: "38px",
          top: "208px",
          left: "436px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "马可波罗",
        style: {
          width: "28px",
          height: "49px",
          top: "114px",
          left: "451px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "绝味鸭脖",
        style: {
          width: "31px",
          height: "50px",
          top: "113px",
          left: "477px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "水果摊",
        style: {
          width: "37px",
          height: "24px",
          top: "174px",
          left: "495px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "玛玛露昔娅咖啡",
        style: {
          width: "36px",
          height: "53px",
          top: "210px",
          left: "548px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "聚宝阁",
        style: {
          width: "29px",
          height: "51px",
          top: "210px",
          left: "579px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "午塘布鞋",
        style: {
          width: "34px",
          height: "49px",
          top: "210px",
          left: "605px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "儿童乐园",
        style: {
          width: "94px",
          height: "114px",
          top: "140px",
          left: "689px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "楚天舒便利店",
        style: {
          width: "50px",
          height: "56px",
          top: "135px",
          left: "546px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      },
      {
        name: "电房",
        style: {
          width: "10px",
          height: "18px",
          top: "116px",
          left: "574px",
          background: "rgba(0,0,0,.4)",
          position: "absolute"
        }
      }
    ];
    this.tableData.forEach(i => {
      i.d = JSON.stringify(arr);
    });
  }
};
</script>

<style scoped></style>
