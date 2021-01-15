<template>
    <div class="imgBox">
        <img src="../../assets/serviceAreaFP/alfwqdq.jpg" class="img" alt=" "/>
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
                box: [
                    {
                        "name": "加油站",
                        "style": {
                            "width": "76px",
                            "height": "35px",
                            "top": "231px",
                            "left": "254px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "闲置仓库",
                        "style": {
                            "width": "54px",
                            "height": "61px",
                            "top": "79px",
                            "left": "339px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "真功夫",
                        "style": {
                            "width": "70px",
                            "height": "99px",
                            "top": "111px",
                            "left": "391px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "猫屎咖啡",
                        "style": {
                            "width": "29px",
                            "height": "23px",
                            "top": "143px",
                            "left": "462px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "",
                        "style": {
                            "width": "97px",
                            "height": "61px",
                            "top": "146px",
                            "left": "490px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "太白烤鸡",
                        "style": {
                            "width": "37px",
                            "height": "62px",
                            "top": "79px",
                            "left": "597px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "楚天舒便利店",
                        "style": {
                            "width": "57px",
                            "height": "21px",
                            "top": "145px",
                            "left": "593px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "赶路小吃",
                        "style": {
                            "width": "65px",
                            "height": "29px",
                            "top": "183px",
                            "left": "590px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "男厕",
                        "style": {
                            "width": "43px",
                            "height": "67px",
                            "top": "98px",
                            "left": "677px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "女厕",
                        "style": {
                            "width": "46px",
                            "height": "48px",
                            "top": "116px",
                            "left": "740px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "汽修",
                        "style": {
                            "width": "51px",
                            "height": "46px",
                            "top": "142px",
                            "left": "883px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "停车区",
                        "style": {
                            "width": "84px",
                            "height": "43px",
                            "top": "258px",
                            "left": "416px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "出口",
                        "style": {
                            "width": "85px",
                            "height": "43px",
                            "top": "283px",
                            "left": "137px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "入口",
                        "style": {
                            "width": "81px",
                            "height": "44px",
                            "top": "280px",
                            "left": "999px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    },
                    {
                        "name": "停车区2",
                        "style": {
                            "width": "100px",
                            "height": "35px",
                            "top": "260px",
                            "left": "812px",
                            "background": "rgba(0,0,0,.4)",
                            "position": "absolute"
                        }
                    }
                ]
            };
        },
        methods: {
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
            background: none !important;
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
