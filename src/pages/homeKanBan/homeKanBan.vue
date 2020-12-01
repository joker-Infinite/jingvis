<template>
    <div class="body">
        <div class="container">
            <div class="con">
                <div class="H_top">
                    <div class="H_top_left">
                        <HomeTopLeft></HomeTopLeft>
                    </div>
                    <div class="H_top_center">
                        <center-map @showMap="showMap"></center-map>
                    </div>
                    <div class="H_top_right">
                        <HomeTopRight ref="homeTopRight"></HomeTopRight>
                    </div>
                </div>
                <div style="height: 2%;width: 100%"></div>
                <div class="H_bottom">
                    <home-bottom ref="homebottom" @showOne="showOne"></home-bottom>
                </div>
            </div>
        </div>
        <show-e-charts ref="showECharts"></show-e-charts>
        <show-map ref="showMap"></show-map>
    </div>
</template>

<script>
    import HomeTopLeft from "./children/HomeTopLeft";
    import CenterMap from "./children/centerMap";
    import HomeTopRight from "./children/HomeTopRight";
    import HomeBottom from "./children/HomeBottom";
    import ShowECharts from "../../components/common/showECharts";
    import ShowMap from "../../components/common/showMap";

    export default {
        name: "homeKanBan",
        data() {
            return {};
        },
        methods: {
            showOne(v) {
                this.$refs["showECharts"].openDialog(v);
            },
            showMap(v) {
                this.$refs['showMap'].openDialog(v);
            }
        },
        components: {ShowMap, ShowECharts, HomeBottom, HomeTopRight, CenterMap, HomeTopLeft},
        mounted() {
            let this_ = this;
            // setTimeout(() => {
            //   window.addEventListener("resize", function() {
            //     this_.$refs.homeTopRight.isResize();
            //     this_.$refs.homebottom.isResize();
            //     // this.$refs.HomeTopRight.isResize();
            //   });
            // }, 1000);
        },
    };
</script>

<style scoped lang="less">
    .body {
        width: 100%;
        height: 100%;
        background: url("../../assets/background.jpg") no-repeat;
        background-size: cover;

        .container {
            width: 100%;
            height: 100%;
            // background: url("../assets/head.png") no-repeat;
            background-size: 100%;
            overflow: hidden;

            .con {
                width: 97%;
                height: 85%;
                margin: 6.5% 1.5% 0;

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
                        width: 54%;
                        height: 96%;
                        margin-top: 0.5em;
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
