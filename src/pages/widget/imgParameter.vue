<template>
    <div class="BB">
        <div class="i_l" id="IL" @click="clickDot">
            <div
                    class="sBox"
                    v-for="i in viewData"
                    v-if="viewData.length > 0 && !selectTable"
                    :style="{
          width: i.width + 'px',
          height: i.height + 'px',
          top: i.top + 'px',
          left: i.left + 'px',
          background: i.background
        }"
            ></div>
            <div
                    class="sBox"
                    v-if="selectTable"
                    :style="{
          width: style.width + 'px',
          height: style.height + 'px',
          top: style.top + 'px',
          left: style.left + 'px',
          background: style.background
        }"
            ></div>
            <img src="" id="imgDot" :style="{ width: FD.imgWidth + 'px' }" alt=""/>
            <my-table-base
                    @selection-change="selectionChange"
                    chooseItem='single'
                    :pagination="false"
                    :search="false"
                    :multiple="false"
                    class="table"
                    :operations="operations"
                    :columns="columns"
                    height="500px"
                    :tableData="tableData"
            ></my-table-base>
        </div>
        <div class="i_r">
            <el-form :model="FD">
                <div class="item" style="padding: 10px 10px">
                    <input id="upload" type="file" @change="uploadImg"/>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-info"
                            circle
                            disabled
                    ></el-button>
                    服务区名：
                    <el-input v-model="serviceName"></el-input>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-info"
                            circle
                            disabled
                    ></el-button>
                    名字：
                    <el-input v-model="FD.name" :disabled="selectTable"></el-input>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-edit"
                            circle
                            disabled
                    ></el-button>
                    图宽：
                    <el-input-number
                            controls-position="right"
                            :min="1"
                            v-model="FD.imgWidth"
                    ></el-input-number>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-edit"
                            circle
                            @click="parameter('lt')"
                    ></el-button>
                    左上：
                    <el-input v-model="FD.lt"></el-input>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-edit"
                            circle
                            @click="parameter('rb')"
                    ></el-button>
                    右下：
                    <el-input v-model="FD.rb"></el-input>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-check"
                            circle
                            disabled
                    ></el-button>
                    宽度：
                    <el-input-number
                            controls-position="right"
                            :min="1"
                            v-model="FD.width"
                            @change="changeNumber('width')"
                    ></el-input-number>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-check"
                            circle
                            disabled
                    ></el-button>
                    高度：
                    <el-input-number
                            controls-position="right"
                            :min="1"
                            v-model="FD.height"
                            @change="changeNumber('height')"
                    ></el-input-number>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-check"
                            circle
                            disabled
                    ></el-button>
                    距左：
                    <el-input-number
                            controls-position="right"
                            :min="1"
                            v-model="FD.left"
                            @change="changeNumber('left')"
                    ></el-input-number>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-check"
                            circle
                            disabled
                    ></el-button>
                    距上：
                    <el-input-number
                            controls-position="right"
                            :min="1"
                            v-model="FD.top"
                            @change="changeNumber('top')"
                    ></el-input-number>
                </div>
                <div class="item" style="padding: 10px 10px">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-star-on"
                            circle
                            disabled
                    ></el-button>
                    颜色：
                    <el-input
                            v-model="FD.background"
                            @blur="changeNumber('background')"
                    ></el-input>
                </div>
                <div class="item btn" style="padding: 10px 10px;text-align: center">
                    <el-button type="primary" @click="previewSave(FD)"
                    >预览&保存
                    </el-button>
                    <el-button
                            type="primary"
                            :disabled="tableData.length === 0"
                            @click="generateAll(tableData)"
                    >全部生成代码
                    </el-button>
                    <el-button
                            type="primary"
                            :disabled="tableData.length === 0"
                            @click="saveCode(tableData)"
                    >保存代码
                    </el-button>
                </div>
            </el-form>
            <div class="text_json">
                <textarea rows="22" v-model="gCode" style="width: 400px"></textarea>
            </div>
        </div>
    </div>
</template>

<script>

    import MyTable from "../../components/common/myTable";
    import MyTableBase from "../../components/common/myTableBase";

    export default {
        name: "imgParameter",
        components: {MyTableBase, MyTable},
        data() {
            return {
                operations: [
                    {
                        name: '删除',
                        type: 'danger',
                        callback: v => {
                            let has = [];
                            let data = JSON.parse(JSON.stringify(this.tableData));
                            this.tableData = [];
                            data.forEach(i => {
                                if (i.name !== v.name) {
                                    has.push(i);
                                }
                            });
                            this.tableData = has;
                            this.viewData = has;
                        }
                    }
                ],
                FD: {
                    name: "",
                    imgWidth: 920,
                    lt: "",
                    rb: "",
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    background: "rgba(0,0,0,.4)"
                },
                FP: "",
                gCode: "",
                style: {
                    width: "",
                    height: "",
                    top: "",
                    left: "",
                    background: ""
                },
                columns: [
                    {prop: "name", label: "名字"},
                    {prop: "width", label: "宽度"},
                    {prop: "height", label: "高度"},
                    {prop: "left", label: "距左"},
                    {prop: "top", label: "距上"},
                    {prop: "background", label: "颜色"}
                ],
                tableData: [],
                viewData: [],
                disabledBtn: false,
                view: false,
                selectTable: false,
                serviceName: "",
                servicePicture: ''
            };
        },
        methods: {
            //保存代码
            saveCode(v) {
                if (!this.serviceName) {
                    return;
                }
                let arr = this.serviceName.split('-');
                let serviceDirection = arr[1];
                let serviceName = arr[0];
                let code = this.generateAll(v);
                let name = this.serviceName + ".json";
                this.download(name, code);
                this.$axios.post('/api/admin/jt_service/add_plan', {
                    serviceDirtion: serviceDirection,
                    serviceJson: this.gCode,
                    serviceName: serviceName,
                    servicePicture: '../../XXXX.png'
                }).then(res => {
                    this.$message.success('上传成功！');
                }).catch(err => {
                    this.$message.error('上传失败！');
                })
            },
            fake_click(obj) {
                let ev = document.createEvent("MouseEvents");
                ev.initMouseEvent(
                    "click",
                    true,
                    false,
                    window,
                    0,
                    0,
                    0,
                    0,
                    0,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null
                );
                obj.dispatchEvent(ev);
            },
            download(name, data) {
                let urlObject = window.URL || window.webkitURL || window;

                let downloadData = new Blob([data]);

                let save_link = document.createElementNS(
                    "http://www.w3.org/1999/xhtml",
                    "a"
                );
                save_link.href = urlObject.createObjectURL(downloadData);
                save_link.download = name;
                this.fake_click(save_link);
            },
            //列表中选择需要单个调整的块
            selectionChange(v) {
                if (v) {
                    this.selectTable = true;
                    v = JSON.parse(JSON.stringify(v));
                    Object.assign(this.FD, v[0]);
                    this.style = v[0];
                }
            },
            //清空所填内容
            clearBox() {
                this.FD = {
                    name: "",
                    imgWidth: 920,
                    lt: "",
                    rb: "",
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    background: "rgba(0,0,0,.4)"
                };
                this.style = {
                    name: "",
                    width: "",
                    height: "",
                    top: "",
                    left: "",
                    background: ""
                };
            },
            //全部预览
            previewAll() {
                this.clearBox();
                this.viewData = JSON.parse(JSON.stringify(this.tableData));
            },
            //全部生成代码
            generateAll(v) {
                let arr = [];
                v.forEach((i, x) => {
                    arr.push({
                        name: i.name,
                        style: {
                            width: i.width + "px",
                            height: i.height + "px",
                            top: i.top + "px",
                            left: i.left + "px",
                            background: i.background,
                            position: "absolute"
                        }
                    })
                });
                this.gCode = JSON.stringify(arr);
                return JSON.stringify(arr);
            },
            //添加至表格
            addToTable(v) {
                v = JSON.parse(JSON.stringify(v));
                let data = JSON.parse(JSON.stringify(this.tableData));
                this.tableData = [];
                if (!v.name) {
                    return;
                }
                if (data.length === 0) {
                    data.push(v);
                } else {
                    let name = data.map(i => {
                        return i.name;
                    });
                    if (name.indexOf(v.name) !== -1) {
                        data[name.indexOf(v.name)] = v;
                    }
                    if (name.indexOf(v.name) === -1) {
                        data.push(v);
                    }
                }
                this.tableData = data;
            },
            uploadImg() {
                let f = document.getElementById("upload").files[0];
                let src = window.URL.createObjectURL(f);
                this.servicePicture = src;
                document.getElementById("imgDot").src = src;
            },
            changeNumber(v) {
                this.style[v] = this.FD[v];
            },
            clickDot() {
                let imgDot = document.getElementsByClassName('BB')[0];
                if (!this.disabledBtn) {
                    return;
                }
                let left = event.clientX;
                let top = event.clientY;
                let arr = left - imgDot.offsetLeft + "," + top;
                this.FD[this.FP] = arr;
            },
            //预览
            previewSave(v) {
                let lt = [];
                let rb = [];
                if (!v.lt && !this.selectTable) {
                    this.$message.warning("请选择左上角");
                    return;
                }
                if (!v.rb && !this.selectTable) {
                    this.$message.warning("请选择右下角");
                    return;
                }
                if (!v.name && !this.selectTable) {
                    this.$message.warning("请输入名字");
                    return;
                }
                this.disabledBtn = false;
                this.view = true;
                if (v.lt && v.rb && !this.selectTable) {
                    lt = v.lt.split(",");
                    rb = v.rb.split(",");
                    v.left = lt[0];
                    v.top = lt[1];
                    v.width = rb[0] - lt[0];
                    v.height = rb[1] - lt[1];
                    this.style = {
                        left: lt[0],
                        top: lt[1],
                        width: rb[0] - lt[0],
                        height: rb[1] - lt[1],
                        background: v.background,
                        name: v.name
                    };
                    this.addToTable(this.style);
                    this.previewAll();
                }
                if (this.selectTable) {
                    this.selectTable = false;
                    this.addToTable(v);
                    this.previewAll();
                }
            },
            //参数
            parameter(v) {
                this.disabledBtn = true;
                this.FP = v;
            }
        }
    };
</script>

<style scoped lang="less">
    .BB {
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: nowrap;

        .i_l {
            width: calc(100% - 400px);
            height: 100%;
            background: #ddf5f7;
            position: relative;

            .sBox {
                position: absolute;
            }

            .table {
                position: absolute;
                left: 0;
                bottom: 0;
                height: 400px !important;
                width: calc(100% - 10px) !important;
            }
        }

        .i_r {
            width: 400px;
            height: 100%;

            .item {
                /deep/ .el-input {
                    width: 250px;

                    .el-input__inner {
                        height: 30px;
                        line-height: 30px;
                    }
                }

                /deep/ .el-input-number {
                    width: 250px;
                    height: 30px;
                    line-height: 30px;

                    .el-input-number__increase {
                        line-height: 15px;
                    }

                    .el-input-number__decrease {
                        line-height: 15px;
                    }
                }
            }

            .btn {
                /deep/ .el-button {
                    margin-bottom: 10px;
                }
            }

            .text_json {
                width: 100%;
                height: 300px;
            }
        }
    }
</style>
