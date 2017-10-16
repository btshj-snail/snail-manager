/**
 * Created by snail on 17-10-16.
 */
'use strict'

const PageResServer = require( '../server/pageResServer');
const resCon = require('../frame/controller/responseConstruct');

const pageResServer = new PageResServer;


/**
 * 获取所有菜单信息
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const getAllMenusInfo = async (ctx, next) => {

    let result = pageResServer.getAllMenuInfo();
    resCon.setOK(ctx, result);
    await next();

}


/**
 * 获取指定节点下的所有菜单信息(包括孙节点)
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const getChildrenAndGrandsonMenu = async (ctx, next) => {
    let {parentId} = ctx.request.body;
    let result = pageResServer.getChildrenAndGrandsonMenu(parentId);
    resCon.setOK(ctx,result);
}



module.exports = {
    'POST /getAllMenusInfo': getAllMenusInfo,
    'POST /getChildrenAndGrandsonMenu': getChildrenAndGrandsonMenu,
}