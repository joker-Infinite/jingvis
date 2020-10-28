<template>
    <div class="container">
        <nav-common ref="navCommon"></nav-common>
    </div>
</template>

<script>
    import NavCommon from "./common/navCommon";

    export default {
        name: "three",
        data() {
            return {
                tabData: [
                    {content: '基础信息'},
                    {content: '经营信息'},
                    {content: '合同信息'},
                    {content: '特产信息'},
                    {content: '特色信息'},
                ]
            }
        },
        components: {NavCommon},
        methods: {},
        mounted() {
            this.$refs['navCommon'].refresh(this.tabData);
        }
    }
</script>

<style scoped lang="less">
    .container {
        width: 1000px;
        min-height: 900px;
        margin: auto;
        background: #ededed;
        position: relative;
    }
</style>