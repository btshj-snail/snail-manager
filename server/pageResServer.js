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
    {id: "16", parentId: "1", name: "Page Resource", pageUrl: "/admin/pageResMgView", icon: "", isPage: true, position: "side"},
    {id: "17", parentId: "1", name: "Organization Manager", pageUrl: "/admin/userMgView", icon: "", isPage: true, position: "side"},
    {id: "18", parentId: "1", name: "Role Manager", pageUrl: "/admin/roleMgView", icon: "", isPage: true, position: "side"},
    {id: "19", parentId: "1", name: "User Manager", pageUrl: "/admin/userMgView", icon: "", isPage: true, position: "side"},
    {id: "101", parentId: "1", name: "Acl Manager", pageUrl: "/admin/aclView", icon: "", isPage: true, position: "side"},
    {id: "102", parentId: "1", name: "Page Resource", pageUrl: "/admin/pageResMgView", icon: "", isPage: true, position: "side"},
    {id: "103", parentId: "1", name: "Organization Manager", pageUrl: "/admin/userMgView", icon: "", isPage: true, position: "side"},
    {id: "104", parentId: "1", name: "Role Manager", pageUrl: "/admin/roleMgView", icon: "", isPage: true, position: "side"},
    {id: "105", parentId: "1", name: "User Manager", pageUrl: "/admin/userMgView", icon: "", isPage: true, position: "side"},
    {id: "106", parentId: "1", name: "Acl Manager", pageUrl: "/admin/aclView", icon: "", isPage: true, position: "side"},
    {id: "107", parentId: "1", name: "Page Resource", pageUrl: "/admin/pageResMgView", icon: "", isPage: true, position: "side"},
    {id: "108", parentId: "1", name: "Organization Manager", pageUrl: "/admin/userMgView", icon: "", isPage: true, position: "side"},
    {id: "109", parentId: "1", name: "Role Manager", pageUrl: "/admin/roleMgView", icon: "", isPage: true, position: "side"},
    {id: "110", parentId: "1", name: "User Manager", pageUrl: "/admin/userMgView", icon: "", isPage: true, position: "side"},
    {id: "111", parentId: "1", name: "Acl Manager", pageUrl: "/admin/aclView", icon: "", isPage: true, position: "side"},
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
     * 获取所有界面资源信息
     * @returns {[*,*,*,*,*,*,*,*,*,*,*,*,*,*,*]}
     */
    getAllPageResInfo(){
        return data;
    }


    /**
     * 通过parentId获取界面资源信息
     * @param parentId
     * @param paging
     * @returns {Object}
     */
    getPageResByParent(parentId,paging){
        let newData = data.filter(item=>parentId==item.parentId);
        let totalSize = newData.length;
        if (!!paging) {
            let {currentPage, size} = paging;
            let predict = currentPage * size;
            newData = newData.slice( (currentPage-1) * size, predict > newData.length ? newData.length : predict)
        }
        paging = Object.assign({},paging,{total:totalSize});
        return {data:newData,paging};
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


    /**
     * 新增
     * @param object
     */
    addPageRes(object){
        let {parentId,name,pageUrl,icon,isPage,position} = object;
        data.push(object);
    }

}


module.exports = PageResServer;