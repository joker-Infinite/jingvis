<template>
    <div class="nav">
        <el-collapse class="left" id="left" v-model="activeName">
            <el-collapse-item :name="ix" :id="'box'+ix" class="box" v-for="(it,ix) in tabData">
                <template slot="title">
                    <span style="display: inline-block;width: 20px"></span>
                    <i :class="{
                        'header-icon':true,
                        'el-icon-info':ix === 0,
                        'el-icon-data-line':ix === 1,
                        'el-icon-tickets':ix === 2,
                        'el-icon-tableware':ix === 3,
                        'el-icon-view':ix === 4}"></i>
                    <span style="display: inline-block;width: 5px"></span>
                    {{it.content}}
                </template>
                <div class="content_l" :style="{width:it.content === '服务区状态'?'100%':'60%'}">
                    <div class="form_box">
                        <el-form :model="formStatus" label-width="110px" v-if="it.content === '服务区状态'">
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
                                    <el-checkbox-group v-model="formStatus.gas" @change="gasType(formStatus.gas)">
                                        <el-checkbox :value="1" label="正常" :disabled="closed"></el-checkbox>
                                        <el-checkbox :value="2" label="停业" :disabled="normal"></el-checkbox>
                                        <el-checkbox :value="3" label="汽油" class="checkbox_select" :disabled="closed">
                                            <template slot="default">
                                                汽油
                                                <el-select v-model="formStatus.gasoline"
                                                           :class="{'disabled':gasolineDisabled}"
                                                           :disabled="gasolineDisabled" multiple>
                                                    <el-option :value="1" :label="92"></el-option>
                                                    <el-option :value="2" :label="95"></el-option>
                                                    <el-option :value="3" :label="98"></el-option>
                                                </el-select>
                                                告罄
                                            </template>
                                        </el-checkbox>
                                        <el-checkbox :value="4" label="柴油告罄" :disabled="closed"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="自营商店：">
                                    <el-radio-group>
                                        <el-radio label="正常"></el-radio>
                                        <el-radio label="停业"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-form>
                        <el-form :model="formBasis" label-width="110px" v-if="it.content === '基础信息'">
                            <el-col :span="12" v-for="item in baseData">
                                <el-form-item :label="item.label+'：'">
                                    {{item.value}}
                                </el-form-item>
                            </el-col>
                        </el-form>
                    </div>
                </div>
                <div class="content_r" v-if="ix !==0">
                    <div class="img_box">
                        <img-common v-for="i in 4" :img-data="it.imgData"></img-common>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
        <div class="right">
            <div class="navBar">
                <p v-for="(it,ix) in tabData" @click="goto(ix)" :class="{'active':isActive === ix}">
                    {{it.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import ImgCommon from "./imgCommon";

    export default {
        name: "navCommon",
        components: {ImgCommon},
        data() {
            return {
                closed: false,
                normal: false,
                gasolineDisabled: false,
                activeName: [0, 1, 2, 3, 4],
                isActive: 0,
                tabData: [],
                navData: [],
                formBasis: {},
                formStatus: {
                    service: '',
                    gas: ['汽油'],
                    gasoline: [1, 2, 3]
                },
                baseData: [
                    {label: '服务区', value: '蔡甸服务区'},
                    {label: '类别', value: '一类服务区'},
                    {label: '所属公司', value: '孝感分公司'},
                    {label: '开通状况', value: '是'},
                    {label: '开通时间', value: '2002.11'},
                    {label: '所在高速', value: '京港澳高速'},
                    {label: '高速编号', value: 'G4'},
                    {label: '高速桩号', value: 'K1165'},
                    {label: '占地面积', value: '131'},
                    {label: '建筑面积', value: '87333.3'},
                    {label: '经营面积', value: '15347.26'},
                    {label: '绿化面积', value: '5689.64'},
                    {label: '日均车流量', value: '33960.7'},
                    {label: '日高峰期车流量', value: '3500'},
                    {label: '厕所等级', value: '五星'},
                    {label: '厕所改造时间', value: '2018.09'},
                    {label: '男女蹲位数量', value: '114，126'},
                    {label: '小便器阀数量', value: '114'},
                    {label: '大车位个数', value: '112'},
                    {label: '小车位个数', value: '150'},
                    {label: '保安人数', value: '18'},
                    {label: '保洁人数', value: '35'},
                    {label: '加油站开通', value: '是'},
                    {label: '加油机数量', value: '14'},
                    {label: '充电桩数量', value: '8'},
                    {label: '充电桩分布', value: '双侧'},
                    {label: '所属地域', value: '孝感市孝南区'},
                    {label: '路段管理单位', value: '京珠运营公司'},
                    {label: '服务区负责人', value: '王永红'},
                    {label: '联系方式', value: '18071019995'},
                    {label: '停车场面积', value: '90757.3'},
                    {label: '加油站管理单位', value: '中石化'},
                ]
            }
        },
        methods: {
            gasType(v) {
                if (v.indexOf('停业') !== -1) {
                    this.gasolineDisabled = true;
                    this.closed = true;
                } else {
                    this.gasolineDisabled = false;
                    this.closed = false;
                }
                ;

                if (v.indexOf('正常') !== -1) {
                    this.normal = true;
                } else {
                    this.normal = false;
                }
            },
            /**
             * @param data
             * */
            refresh(data) {
                this.tabData = data;
                this.isActive = 0;
                this.$nextTick(_ => {
                    document.querySelector('#box0').scrollIntoView(true);
                })
            },
            /**
             * @param v 所点击导航的下标
             * */
            goto(v) {
                let id = '#box' + v;
                document.querySelector(id).scrollIntoView(true);
            },
            /**
             * 监听滚动事件
             * */
            scrollChange() {
                let left = document.getElementById('left');
                left.addEventListener('scroll', _ => {
                    this.navData = [];
                    this.tabData.forEach((item, index) => {
                        this.navData.push(
                            {
                                index: index,
                                height: document.getElementById('box' + index).offsetTop
                            }
                        );
                    });
                    this.navBar(left.scrollTop);
                })
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
            }
        },
        mounted() {
            this.scrollChange();
        }
    }
</script>

<style scoped lang="less">
    .nav {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        .left {
            width: 80%;
            height: 100%;
            float: left;
            overflow-y: scroll;
            scroll-behavior: smooth;

            .box {
                width: 100%;
                background: #d4d4d4;
                text-align: center;
            }
        }

        .left::-webkit-scrollbar {
            display: none;
        }

        /*.left /deep/ .el-collapse-item > .el-collapse-item__wrap {
            min-height: 500px;
        }*/

        .left /deep/ .el-collapse-item > .el-collapse-item__wrap > .el-collapse-item__content {
            font-size: 14px;

            .content_l {
                min-height: 500px;
                width: 60%;
                float: left;

                .form_box {
                    overflow: hidden;
                    margin: 20px;

                    .checkbox_select /deep/ .el-checkbox__label > .el-select > .el-input {
                        min-width: 50px !important;
                        border: none;
                    }

                    .checkbox_select /deep/ .el-checkbox__label > .el-select {
                        /*max-width: 120px !important;*/
                        border: none;
                    }

                    .checkbox_select /deep/ .el-checkbox__label > .el-select > .el-select__tags {
                        /*max-width: 120px !important;*/
                    }

                    .checkbox_select /deep/ .el-checkbox__label > .el-select > .el-input > .el-input__inner {
                        border: none;
                        border-bottom: 1px solid #e5e5e5;
                    }

                    .checkbox_select /deep/ .el-checkbox__label > .el-select > .is-disabled > .el-input__inner {
                        background: white;
                        border: none;
                        padding-right: 0;
                        max-width: 120px !important;
                    }

                    .checkbox_select /deep/ .el-checkbox__label > .disabled {
                        max-width: 120px !important;
                        border: none;
                    }

                    .checkbox_select /deep/ .el-checkbox__label > .disabled > .el-select__tags {
                        max-width: 120px !important;
                    }

                    .checkbox_select /deep/ .el-checkbox__label > .disabled > .is-disabled > .el-input__suffix {
                        display: none;
                    }
                }

                .form_box /deep/ .el-form > .el-col > .el-form-item > .el-form-item__label {
                    font-size: 12px;
                    line-height: 30px;
                }

                .form_box /deep/ .el-form > .el-col > .el-form-item {
                    height: 30px;
                    text-align: left;
                }

                .form_box /deep/ .el-form > .el-col > .el-form-item > .el-form-item__content {
                    height: 30px;
                    line-height: 30px;
                }

                .form_box /deep/ .el-form > .el-col > .el-form-item > .el-form-item__content > .el-input > .el-input__inner {
                    height: 30px;
                    line-height: 30px;
                    border: none;
                }
            }

            .content_r {
                min-height: 500px;
                width: 40%;
                float: right;

                .img_box {
                    overflow: hidden;
                    margin: 20px;
                }
            }
        }

        .left /deep/ .el-collapse-item > div > .el-collapse-item__header {
            background: #f7f7f7;
            font-size: 16px;
        }

        .right {
            width: 20%;
            height: 100%;
            float: right;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            justify-content: center;

            .navBar {
                width: 100%;
                min-height: 20px;
                border-left: 1px solid #999999;

                .active {
                    color: #409eff;
                    border-left: 5px solid #409eff;
                }
            }

            .navBar > p {
                text-indent: 20px;
                line-height: 30px;
                border-left: 5px solid rgba(0, 0, 0, 0);
                cursor: pointer;
            }
        }
    }

    .nav /deep/ .el-collapse {
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, .5);
    }
</style>