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
     * 获取所有子孙节点
     * @param parentId
     * @returns {Array}
     */
    getChildrenAndGrandsonMenu(parentId){
        if(!parentId) parentId = "";
        let result = [];
        this._getChildrenAndGrandsonMenu(parentId,result);
        return result;
    }

    /**
     * 获取所有子节点
     * @param pId
     */
    getChildrenMenu(pId){
        let result = [];
        for(let i=0,l=data.length;i<l;i++){
            let {parentId} = data[i];
            if(pId==parentId){
                result.push(data[i]);
            }
        }
        return result;
    }



    /**
     * 获取所有子孙节点
     * @param pId
     * @param store
     * @private
     */
    _getChildrenAndGrandsonMenu(pId,store=[]){
        //todo 获取所有节点信息,然后再进行噻选
        for(let i=0,l=data.length;i<l;i++){
            let {parentId,isPage,id} = data[i];
            if(pId==parentId){
                store.push(data[i]);
                if(!isPage){
                    this._getChildrenAndGrandsonMenu(id,store);
                }
            }
        }
    }
}


module.exports = PageResServer;