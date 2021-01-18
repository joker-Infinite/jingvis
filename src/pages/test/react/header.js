import Vue from "vue";

Vue.component('headers', {
    data() {
        return {
            name: '测试页面',
            address: '测试react',
            style: {
                width: '500px',
                height: '500px',
                background: 'red'
            }
        }
    },
    render(createElement, hack) {
        const {name, address} = this;
        return (<div style={style}>{name}{address}</div>)
    }
});