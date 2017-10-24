/**
 * Created by snail on 17-10-16.
 */
'use strict'

const PageResServer = require('../server/pageResServer');
const resCon = require('../frame/controller/responseConstruct');
const {CODE_NOT_LOGGED} = require('../constant/errorCode');
const log4jsHelper = require('../frame/log/log4jsHelper');
const pageResServer = new PageResServer();




/**
 * 获取所有菜单信息
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const getAllPageResInfo = async (ctx, next) => {

    let result = pageResServer.getAllPageResInfo();
    resCon.setOK(ctx, result);
    await next();

}


/**
 * 通过父节点 获取所有子节点(不包含孙节点)
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const getPageResByParent = async (ctx, next) => {
    let {parentId,paging} = ctx.request.body;
    let result = pageResServer.getPageResByParent(parentId,paging);
    log4jsHelper.debug(result);
    resCon.setOK(ctx, result);
    await  next();
}


/**
 * 获取当前用户有权限查询的菜单
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const getMenusByCurrentUser = async (ctx, next) => {
    let currentUser = ctx.session.loginInfo;
    if (!currentUser) {
        resCon.setError(ctx, CODE_NOT_LOGGED);
    } else {
        let result = pageResServer.getMenusByUserId(currentUser.id);
        resCon.setOK(ctx, result);
    }

    await next();
}


module.exports = {
    'POST /getAllPageResInfo': getAllPageResInfo,
    'POST /getPageResByParent': getPageResByParent,
    'POST /getMenusByCurrentUser': getMenusByCurrentUser,
}