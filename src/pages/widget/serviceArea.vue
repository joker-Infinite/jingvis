<template>
    <div class="imgBox">
        <img src="" id="imgDot" class="img" alt="请选择图片"/>
        <div class="smallBox"
             v-for="i in box"
             :style="i.style"
             @click="openDetails(i)">
            <el-popover
                    placement="bottom"
                    :disabled="popoverDisabled"
                    v-if="i.name"
                    :title="i.name"
                    width="300"
                    trigger="hover">
                <table class="table" border="1" cellspacing="0">
                    <tr v-if=i.data v-for="(it, ix) in i.data">
                        <th>{{ it.a }}</th>
                        <th>{{ it.b }}</th>
                    </tr>
                </table>
                <div style="width: 100%;height: 100%" slot="reference"></div>
            </el-popover>
        </div>
        <div class="select">
            img: <input id="upload" type="file" @change="uploadImg"/>
            json: <input id="files" type="file" @change="uploadJson"/>
        </div>
        <more-information
                NE="imgFloorPlan"
                :location="location"
                ref="more"
                @showPopover="popoverDisabled = false">
        </more-information>
    </div>
</template>

<script>
    import service from "../../components/json/service";
    import MoreInformation from "../../components/common/moreInformation";

    export default {
        name: "serviceArea",
        mixins: [service],
        props: {
            location: {
                type: String,
                default: ""
            }
        },
        components: {MoreInformation},
        data() {
            return {
                popoverDisabled: false,
                box: []
            };
        },
        methods: {
            uploadImg() {
                let f = document.getElementById("upload").files[0];
                let src = window.URL.createObjectURL(f);
                document.getElementById("imgDot").src = src;
            },
            uploadJson() {
                let selectedFile = document.getElementById("files").files[0];
                let reader = new FileReader();

                let that = this;
                reader.readAsText(selectedFile);
                reader.onload = function (v) {
                    let data = JSON.parse(v.target.result);
                    that.$nextTick(_ => {
                        that.box = data;
                    })
                }
            },
            openDetails(i) {
                if (!i.noPopover) {
                    // this.popoverDisabled = true;
                    this.$emit('callback', i);
                }
            }
        },
        mounted() {
            // console.log(this['安陆服务区-东区']);
        }
    };
</script>

<style scoped lang="less">
    .imgBox {
        width: 1200px;
        /*margin: auto;*/
        position: relative;

        .img {
            width: 1200px;
        }

        .smallBox {
            position: absolute;
            /*background: none !important;*/
        }

        .select {
            width: 100%;
            height: 80px;
            position: absolute;
            right: 0;
            top: 600px;
        }
    }

    table {
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        font-weight: 100;
    }

    table,
    th,
    td {
        border: 1px solid #606266;
        line-height: 2.5;
    }
</style>
<style>
    .el-popover {
        background: rgba(181, 212, 255, 0.75);
        border: 1px solid rgba(148, 193, 255, 0.8);
    }

    .el-popper[x-placement^="bottom"] .popper__arrow::after {
        border-bottom-color: rgba(148, 193, 255, 0.8) !important;
    }

    .popper__arrow {
        border-bottom-color: rgba(148, 193, 255, 0.8) !important;
    }

    .el-popover__title {
        text-align: center;
        color: #2b2c30;
    }
</style>
