<template>
    <div class="login">
        <div class="register">
            <div class="left">
                <div>交投</div>
            </div>
            <div class="right">
                <div class="conlog">
                    <div class="title">登录</div>
                    <div>
                        <el-input
                                style="margin-bottom:20px"
                                v-model="name"
                                placeholder="用户名"
                        ></el-input>
                        <el-input placeholder="密码" v-model="pwd" show-password></el-input>
                    </div>
                    <el-button type="primary" @click="login">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: "",
                pwd: ""
            };
        },
        methods: {
            login() {
                if (this.name == "" && this.pwd == "") {
                    this.$message.error("账号或密码不能为空哦");
                } else {
                    localStorage.setItem('token', "Bearer " + this.name);
                    this.$router.push("/widget/imgParameter");
                }
            }
        },
        mounted() {
            document.cookie = "menu=/widget/imgParameter-";
        }
    };
</script>
<style lang="less" scoped>
    .login {
        width: 100%;
        height: 100%;
        background: #2950ab;
        position: fixed;

        .register {
            width: 1000px;
            height: 500px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            display: flex;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

            .left {
                position: absolute;
                top: -20%;
                height: 140%;
                left: -10%;
                width: 70%;
                background: pink;
                transform: rotate(15deg);
            }

            .right {
                position: absolute;
                right: -10%;
                top: -20%;
                height: 140%;
                width: 60%;
                background: #fff;
                transform: rotate(15deg);

                .conlog {
                    transform: rotate(-15deg);
                    position: absolute;
                    right: 30%;
                    top: 20%;
                    width: 60%;
                    height: 60%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    .title {
                        font-size: 30px;
                    }
                }
            }
        }
    }
</style>
