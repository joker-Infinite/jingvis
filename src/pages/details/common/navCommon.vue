<template>
  <div class="nav">
    <el-collapse class="left" id="left" v-model="activeName">
      <el-collapse-item
        :name="ix"
        :id="'box' + ix"
        class="box"
        v-for="(it, ix) in tabData"
        :key="ix"
      >
        <template slot="title">
          <span
            style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px"
          ></span>
          <i
            :class="{
              'header-icon': true,
              'el-icon-open': ix === 0,
              'el-icon-info': ix === 1,
              'el-icon-data-line': ix === 2,
              'el-icon-tickets': ix === 3,
              'el-icon-tableware': ix === 4,
              'el-icon-view': ix === 5,
            }"
          ></i>
          <span style="display: inline-block;width: 5px"></span>
          {{ it.content }}
        </template>
        <div class="content_l">
          <div class="form_box">
            <el-form
              class="baseForm"
              :model="formStatus"
              label-width="110px"
              v-if="it.content === '服务区状态'"
            >
              <el-col :span="24">
                <el-form-item label="服务区状态：">
                  <el-radio-group v-model="formStatus.service">
                    <el-radio label="正常"></el-radio>
                    <el-radio label="关闭"></el-radio>
                    <el-radio label="能进不能出"></el-radio>
                    <el-radio label="能出不能进"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="加油站状态：">
                  <el-checkbox-group
                    v-model="formStatus.gas"
                    @change="gasType(formStatus.gas)"
                  >
                    <el-checkbox
                      :value="1"
                      label="正常"
                      :disabled="closed"
                    ></el-checkbox>
                    <el-checkbox
                      :value="2"
                      label="停业"
                      :disabled="normal"
                    ></el-checkbox>
                    <el-checkbox
                      :value="3"
                      label="汽油"
                      class="checkbox_select"
                      :disabled="closed"
                    >
                      <template slot="default">
                        汽油
                        <el-select
                          v-model="formStatus.gasoline"
                          :class="{ disabled: gasolineDisabled }"
                          :disabled="gasolineDisabled"
                          multiple
                        >
                          <el-option :value="1" :label="92"></el-option>
                          <el-option :value="2" :label="95"></el-option>
                          <el-option :value="3" :label="98"></el-option>
                        </el-select>
                        告罄
                      </template>
                    </el-checkbox>
                    <el-checkbox
                      :value="4"
                      label="柴油告罄"
                      :disabled="closed"
                    ></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="自营商店：">
                  <el-radio-group v-model="formStatus.store">
                    <el-radio label="正常"></el-radio>
                    <el-radio label="停业"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-form>
            <div
              style="width: 100%;height: 100%"
              v-if="it.content === '基础信息'"
            >
              <el-tabs
                class="tabs"
                v-model="activeNameTabs"
                @tab-click="tabsClick"
                type="card"
              >
                <el-tab-pane label="东区" name="first">
                  <el-form
                    class="baseForm"
                    :model="formBasis"
                    label-width="125px"
                    style="width: 62%;float:left"
                  >
                    <el-col :span="12" v-for="item in baseData">
                      <el-form-item :label="item.label + '：'">
                        {{ item.value }}
                      </el-form-item>
                    </el-col>
                  </el-form>
                  <div class="content_r">
                    <div class="img_box">
                      <img-common
                        v-for="i in 4"
                        :img-data="it.imgData"
                      ></img-common>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="西区" name="second">
                  <el-form
                    class="baseForm"
                    :model="formBasis"
                    label-width="125px"
                    style="width: 62%;float:left"
                  >
                    <el-col :span="12" v-for="item in baseData">
                      <el-form-item :label="item.label + '：'">
                        {{ item.value }}
                      </el-form-item>
                    </el-col>
                  </el-form>
                  <div class="content_r">
                    <div class="img_box">
                      <img-common
                        v-for="i in 4"
                        :img-data="it.imgData"
                      ></img-common>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="南区" name="third">
                  <el-form
                    class="baseForm"
                    :model="formBasis"
                    label-width="125px"
                    style="width: 62%;float:left"
                  >
                    <el-col :span="12" v-for="item in baseData">
                      <el-form-item :label="item.label + '：'">
                        {{ item.value }}
                      </el-form-item>
                    </el-col>
                  </el-form>
                  <div class="content_r">
                    <div class="img_box">
                      <img-common
                        v-for="i in 4"
                        :img-data="it.imgData"
                      ></img-common>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="北区" name="fourth">
                  <el-form
                    class="baseForm"
                    :model="formBasis"
                    label-width="125px"
                    style="width: 62%;float:left"
                  >
                    <el-col :span="12" v-for="item in baseData">
                      <el-form-item :label="item.label + '：'">
                        {{ item.value }}
                      </el-form-item>
                    </el-col>
                  </el-form>
                  <div class="content_r">
                    <div class="img_box">
                      <img-common
                        v-for="i in 4"
                        :img-data="it.imgData"
                      ></img-common>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
            <el-form
              class="common"
              :model="formSpecialty"
              label-width="110px"
              v-if="it.content === '特产信息'"
            >
              <el-col :span="12">
                <el-form-item label="名称：">
                  <el-input v-model="formSpecialty.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="类型：">
                  <el-input v-model="formSpecialty.type"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人员：">
                  <el-input v-model="formSpecialty.contactPerson"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机号码：">
                  <el-input v-model="formSpecialty.mobile"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="电子邮箱：">
                  <el-input v-model="formSpecialty.Email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="地址：">
                  <el-input v-model="formSpecialty.address"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="描述：">
                  <el-input
                    type="textarea"
                    resize="none"
                    :rows="6"
                    show-word-limit
                    :maxlength="500"
                    v-model="formSpecialty.remark"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-form>
            <el-form
              class="common"
              :model="formFeatures"
              label-width="110px"
              v-if="it.content === '特色信息'"
            >
              <el-col :span="12">
                <el-form-item label="名称：">
                  <el-input v-model="formFeatures.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="类型：">
                  <el-input v-model="formFeatures.type"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人员：">
                  <el-input v-model="formFeatures.contactPerson"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机号码：">
                  <el-input v-model="formFeatures.mobile"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="电子邮箱：">
                  <el-input v-model="formFeatures.Email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="地址：">
                  <el-input v-model="formFeatures.address"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="描述：">
                  <el-input
                    type="textarea"
                    resize="none"
                    :rows="6"
                    show-word-limit
                    :maxlength="500"
                    v-model="formFeatures.remark"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-form>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="right">
      
      <div class="navBar">
        <p @click="collapseAll">{{activeName.length !== 0 ? "全部收起" : "全部展开"}}</p>
        <p
          v-for="(it, ix) in tabData"
          @click="goto(ix)"
          :class="{ active: isActive === ix }"
          :key="ix"
        >
          <i :class="tabData_icon[ix]"></i> {{ it.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImgCommon from "./imgCommon";

export default {
  name: "navCommon",
  components: { ImgCommon },
  data() {
    return {
      activeNameTabs: "first",
      closed: false,
      normal: false,
      gasolineDisabled: false,
      activeName: [0, 1, 2, 3, 4, 5],
      isActive: 0,
      tabData: [],
      tabData_icon: [
        "el-icon-open",
        "el-icon-info",
        "el-icon-data-line",
        "el-icon-tickets",
        "el-icon-tableware",
        "el-icon-view",
      ],
      navData: [],
      formBasis: {},
      formStatus: {
        service: "",
        gas: ["汽油"],
        gasoline: [1, 2, 3],
        store: "",
      },
      //特色
      formFeatures: {
        name: "",
        type: "",
        remark: "",
        contactPerson: "",
        mobile: "",
        Email: "",
        address: "",
      },
      //特产
      formSpecialty: {
        name: "",
        type: "",
        remark: "",
        contactPerson: "",
        mobile: "",
        Email: "",
        address: "",
      },
      baseData: [
        { label: "服务区", value: "蔡甸服务区-东区" },
        { label: "类别", value: "一类服务区" },
        { label: "所属公司", value: "孝感分公司" },
        { label: "开通状况", value: "是" },
        { label: "开通时间", value: "2002.11" },
        { label: "所在高速", value: "京港澳高速" },
        { label: "高速编号", value: "G4" },
        { label: "高速桩号", value: "K1165" },
        { label: "占地面积", value: "131" },
        { label: "建筑面积", value: "87333.3" },
        { label: "经营面积", value: "15347.26" },
        { label: "绿化面积", value: "5689.64" },
        { label: "日均车流量", value: "33960.7" },
        { label: "日高峰期车流量", value: "3500" },
        { label: "厕所等级", value: "五星" },
        { label: "厕所改造时间", value: "2018.09" },
        { label: "男女蹲位数量", value: "114，126" },
        { label: "小便器阀数量", value: "114" },
        { label: "大车位个数", value: "112" },
        { label: "小车位个数", value: "150" },
        { label: "保安人数", value: "18" },
        { label: "保洁人数", value: "35" },
        { label: "加油站开通", value: "是" },
        { label: "加油机数量", value: "14" },
        { label: "充电桩数量", value: "8" },
        { label: "充电桩分布", value: "双侧" },
        { label: "所属地域", value: "孝感市孝南区" },
        { label: "路段管理单位", value: "京珠运营公司" },
        { label: "服务区负责人", value: "王永红" },
        { label: "联系方式", value: "18071019995" },
        { label: "停车场面积", value: "90757.3" },
        { label: "加油站管理单位", value: "中石化" },
      ],
    };
  },
  methods: {
    /***全部收起来 */
    collapseAll() {
      if(this.activeName.length!==0){
          this.activeName = [];
      }else{
          this.activeName = [0, 1, 2, 3, 4, 5];
      }
                
            },
    tabsClick(e) {
      let a = "蔡甸服务区-" + e.label;
      this.baseData[0].value = a;
    },
    gasType(v) {
      if (v.indexOf("停业") !== -1) {
        this.gasolineDisabled = true;
        this.closed = true;
      } else {
        this.gasolineDisabled = false;
        this.closed = false;
      }

      this.normal = v.indexOf("正常") !== -1;
    },
    /**
     * @param data
     * */
    refresh(data) {
      this.tabData = data;
      this.isActive = 0;
      this.$nextTick((_) => {
        document.querySelector("#box0").scrollIntoView(true);
      });
    },
    /**
     * @param v 所点击导航的下标
     * */
    goto(v) {
      let id = "#box" + v;
      document.querySelector(id).scrollIntoView(true);
    },
    /**
     * 监听滚动事件
     * */
    scrollChange() {
      let left = document.getElementById("left");
      left.addEventListener("scroll", (_) => {
        this.navData = [];
        this.tabData.forEach((item, index) => {
          this.navData.push({
            index: index,
            height: document.getElementById("box" + index).offsetTop,
          });
        });
        this.navBar(left.scrollTop);
      });
    },
    /**
     * 滚动后导航选中
     * */
    navBar(v) {
      for (let i = 0; i < this.navData.length; i++) {
        if (v < this.navData[i].height || v == this.navData[i].height) {
          this.isActive = i;
          break;
        }
      }
    },
  },
  mounted() {
    this.scrollChange();
  },
};
</script>

<style scoped lang="less">
.nav {
  width: 90%;
  height: 100%;
  position: fixed;
  /*  top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;*/
  /*  display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;*/

  .left {
    width: 80%;
    height: 100%;
    padding-left: 5%;
    overflow-y: scroll;
    scroll-behavior: smooth;

    .box {
      width: 100%;
      margin: 1em 0;
      /*background: #d4d4d4;*/
      text-align: center;
    }
  }

  .left::-webkit-scrollbar {
    display: none;
  }

  .left /deep/ .el-collapse-item > .el-collapse-item__wrap {
    border-radius: 10px;
  }

  .left
    /deep/
    .el-collapse-item
    > .el-collapse-item__wrap
    > .el-collapse-item__content {
    font-size: 14px;

    .content_l {
      min-height: 500px;
      width: 100%;
      float: left;

      .form_box {
        overflow: hidden;
        margin: 10px 20px;

        .checkbox_select /deep/ .el-checkbox__label > .el-select > .el-input {
          min-width: 50px !important;
          border: none;
        }

        .checkbox_select /deep/ .el-checkbox__label > .el-select {
          /*max-width: 120px !important;*/
          border: none;
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .el-select
          > .el-select__tags {
          /*max-width: 120px !important;*/
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .el-select
          > .el-input
          > .el-input__inner {
          border: none;
          border-bottom: 1px solid #e5e5e5;
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .el-select
          > .is-disabled
          > .el-input__inner {
          background: white;
          border: none;
          padding-right: 0;
          max-width: 120px !important;
        }

        .checkbox_select /deep/ .el-checkbox__label > .disabled {
          max-width: 120px !important;
          border: none;
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .disabled
          > .el-select__tags {
          max-width: 120px !important;
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .disabled
          > .is-disabled
          > .el-input__suffix {
          display: none;
        }

        .content_r {
          min-height: 500px;
          width: 38%;
          float: right;

          .img_box {
            overflow: hidden;
            margin: 10px;
          }
        }

        .tabs
          /deep/
          .el-tabs__header
          > .el-tabs__nav-wrap
          > .el-tabs__nav-scroll
          > .el-tabs__nav
          > .is-active {
          background: #409eff;
          color: white;
          font-size: 18px;
          font-weight: 700;
        }

        .tabs
          /deep/
          .el-tabs__header
          > .el-tabs__nav-wrap
          > .el-tabs__nav-scroll
          > .el-tabs__nav
          > .el-tabs__item {
          font-size: 18px;
          font-weight: 700;
        }
      }

      .form_box > .baseForm /deep/ .el-col > .el-form-item {
        height: 30px;
        text-align: left;
      }

      .form_box
        > .baseForm
        /deep/
        .el-col
        > .el-form-item
        > .el-form-item__label {
        font-size: 12px;
        line-height: 30px;
      }

      .form_box
        > .baseForm
        /deep/
        .el-col
        > .el-form-item
        > .el-form-item__content {
        height: 30px;
        line-height: 30px;
      }

      .form_box
        > .baseForm
        /deep/
        .el-col
        > .el-form-item
        > .el-form-item__content
        > .el-input
        > .el-input__inner {
        height: 30px;
        line-height: 30px;
        border: none;
      }
    }
  }

  .left /deep/ .el-collapse-item > div > .el-collapse-item__header {
    background: #737aef;
    border-radius: 10px;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    margin: 1em 0;
    width: 100%;
    // margin: auto;
    color: white;
    border: none;
  }

  .left /deep/ .el-collapse-item > .el-collapse-item__wrap {
    border: none;
  }

  .right {
    width: 20%;
    height: 100%;
    
    // float: right;
    // display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;

    .navBar {

      position: fixed;
      padding-top: 5%;
      padding-bottom: 5%;
      box-sizing: border-box;
      /*box-shadow: 1px 1px 1px 10px rgba(0, 0, 0, 1);*/
      width: 9%;
      // height: 80%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
      background: #fff;
      z-index: 100;
      top: 10%;
      right: 1%;
      border-radius: 10px;

      .active {
        // color: #409eff;
        // border-left: 5px solid #409eff;
        background: #737aef;
        margin-left: -8%;
        margin-right: 8%;
        color: white;
        padding-left: 40px;
        box-shadow: 10px 5px 10px 0 rgba(0, 0, 0, 0.3);
      }
    }

    .navBar > p {
      // cursor: pointer;
      font-size: 16px;
      padding: 10% 0;
      margin: 5% 0;
      margin-left: 25%;
      transition: linear 0.3s;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}

.nav /deep/ .el-collapse {
  /*box-shadow: 0 0 1px 0 rgba(0, 0, 0, .5);*/
}
</style>
