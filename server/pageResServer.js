/**
 * Created by snail on 17-10-16.
 */

'use strict'

const log4jsHelper = require('../frame/log/log4jsHelper');
const data = [
    {id: "1", parentId: "", name: "Author Manager", pageUrl: "", icon: "", isPage: false, position: "top"},
    {id: "11", parentId: "1", name: "Page Resource", pageUrl: "/admin/pageResMgView", icon: "", isPage: true, position: "side"},
    {id: "12", parentId: "1", name: "Organization Manager", pageUrl: "/admin/userMgView", icon: "", isPage: true, position: "side"},
    {id: "13", parentId: "1", name: "Role Manager", pageUrl: "/admin/roleMgView", icon: "", isPage: true, position: "side"},
    {id: "14", parentId: "1", name: "User Manager", pageUrl: "/admin/userMgView", icon: "", isPage: true, position: "side"},
    {id: "15", parentId: "1", name: "Acl Manager", pageUrl: "/admin/aclView", icon: "", isPage: true, position: "side"},
    {id: "2", parentId: "", name: "Preference", pageUrl: "", icon: "", isPage: false, position: "top"},
    {id: "21", parentId: "2", name: "Work Manager", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "22", parentId: "2", name: "System Manager", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "23", parentId: "2", name: "Update Password", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "3", parentId: "", name: "Store Manager", pageUrl: "", icon: "", isPage: false, position: "top"},
    {id: "31", parentId: "3", name: "Store Stick", pageUrl: "", icon: "", isPage: false, position: "side"},
    {id: "311", parentId: "31", name: "Store Manager", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "312", parentId: "31", name: "Store apply", pageUrl: "", icon: "", isPage: true, position: "side"},
    {id: "313", parentId: "31", name: "Store audit", pageUrl: "", icon: "", isPage: true, position: "side"},
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