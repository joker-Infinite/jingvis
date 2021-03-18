<template>
    <div class="body_">
        <div class="children">
            <child-l-t-temp></child-l-t-temp>
        </div>
        <div class="children">
            <child-l-c-temp></child-l-c-temp>
        </div>
        <div class="children">
            <child-l-b-temp></child-l-b-temp>
        </div>
        <div class="children">
        </div>
    </div>
</template>

<script>
    import ChildLTTemp from "./children/childLTTemp";
    import ChildLCTemp from "./children/childLCTemp";
    import ChildLBTemp from "./children/childLBTemp";
    import EChartsTest from "../../components/EChartsTest";

    export default {
        name: "mainBody",
        components: {EChartsTest, ChildLBTemp, ChildLCTemp, ChildLTTemp}
    }
</script>

<style scoped lang="less">
    .body_ {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        .children {
            width: 24%;
            height: 300px;
            background: #99a9bf;
        }
    }
</style>