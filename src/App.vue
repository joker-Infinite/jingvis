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
        background: #a8d9ff;
        width: 100%;
        height: 100%;
    }
</style>
