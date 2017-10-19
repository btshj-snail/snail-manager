/**
 * Created by snail on 17-10-16.
 */

'use strict'

const log4jsHelper = require('../frame/log/log4jsHelper');
const data = [
    {id: "1", parentId: "", name: "权限管理", pageUrl: "", icon: "", isPage: false, position: "top"},
    {id: "11", parentId: "1", name: "界面资源", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "12", parentId: "1", name: "机构管理", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "13", parentId: "1", name: "角色管理", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "14", parentId: "1", name: "用户管理", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "15", parentId: "1", name: "授权管理", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "2", parentId: "", name: "偏好设置", pageUrl: "", icon: "", isPage: false, position: "top"},
    {id: "21", parentId: "2", name: "工作台管理", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "22", parentId: "2", name: "系统设置", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "23", parentId: "2", name: "修改密码", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "3", parentId: "", name: "仓储管理", pageUrl: "", icon: "", isPage: false, position: "top"},
    {id: "31", parentId: "3", name: "仓库运维", pageUrl: "", icon: "", isPage: false, position: "side"},
    {id: "311", parentId: "31", name: "仓库管理", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "312", parentId: "31", name: "仓库申请", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "313", parentId: "31", name: "仓库审核", pageUrl: "", icon: "", isPage: true, position: "side"},
]

class PageResServer{
    constructor(){

    }

    /**
     * 获取所有菜单信息
     */
    getAllMenuInfo(){
        return data;
    }

    /**
     * 根据用户id获取有权限查看的所有menu
     * @param userId
     * @returns {*}
     */
    getMenusByUserId(userId){
        if(!userId){
            return [];
        }
        return data;
    }
}


module.exports = PageResServer;