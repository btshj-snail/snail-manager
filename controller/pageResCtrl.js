/**
 * Created by snail on 17-10-16.
 */
'use strict'

const PageResServer = require( '../server/pageResServer');
const resCon = require('../frame/controller/responseConstruct');
const {CODE_NOT_LOGGED} = require('../constant/errorCode');
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

const getChildrenAndGrandsonMenu = async(ctx,next)=>{
    let currentUser = ctx.session.loginInfo;
    if(!currentUser){
        resCon.setError(ctx,CODE_NOT_LOGGED);
    }else{
        let result = pageResServer.getMenusByUserId(currentUser.id);
        resCon.setOK(ctx,result);
    }

    await next();
}



module.exports = {
    'POST /getAllMenusInfo': getAllMenusInfo,
    'POST /getMenusByCurrentUser': getChildrenAndGrandsonMenu,

}