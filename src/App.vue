<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "app",
        components: {}
    };
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        position: fixed;
        background: #F3F7FF;
        width: 100%;
        height: 100%;
    }
</style>
