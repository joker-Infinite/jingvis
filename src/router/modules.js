/*
 * 路由子模块
 * */
import authorityManagement from './authorityManagement/index'
import systemSettings from './systemSettings/index'
import widget from './widget/index'
import test from "./test/index";

export default {
    authorityManagement: authorityManagement,
    systemSettings: systemSettings,
    widget: widget,
    test: test,
};
