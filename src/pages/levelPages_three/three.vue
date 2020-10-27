<template>
    <div class="container">
        <div class="carousel">
            <el-carousel type="card" interval="1500" height="200px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="basicInformation">
            <el-form></el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "three"
    }
</script>

<style scoped lang="less">
    .container {
        width: 1000px;
        min-height: 900px;
        margin: auto;
        background: #ededed;

        .carousel {
            width: 100%;
            height: 100%;
            overflow: hidden;


            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }

            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }

        .basicInformation {
            width: 100%;
            height: 500px;
            background: #00b8fe;
        }
    }
</style>