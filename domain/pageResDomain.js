/**
 * Created by snail on 17-10-13.
 */
'use strict'

import BaseDomain from '../frame/domain/baseDomain';



class PageRes extends BaseDomain{
    constructor(obj){
        super(obj);
        //父节点id
        this.parentId="";
        //名称
        this.name="";
        //界面路径
        this.pageUrl="";
        //图标
        this.icon="";
        //菜单位置
        //top=>顶部菜单
        //side=>侧边菜单
        this.position="top"
        //是否是界面,默认false
        this.isPage  = false;
    };


}

module.exports = PageRes