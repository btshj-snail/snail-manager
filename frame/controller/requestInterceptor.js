/**
 * Created by snail on 17-9-18.
 */
'use strict'

const sysConfig = require("../../config/sysConfig");
const snailUtils = require("../../utils/snailUtils");
const log4jsHelper = require("../../frame/log/log4jsHelper");
const errorCode = require('../../constant/errorCode');
const resCon = require('../../frame/controller/responseConstruct');


/**
 * 是否登录拦截
 * 如果登录则进行后面的逻辑处理,
 * 若未登录则直接跳转指定界面
 *
 * 1\是否有session
 * 2\路径是否包含在不用登录即可访问界面
 * 3\只限制后缀html以及没有后缀的名称
 * @param ctx
 * @param next
 */
async function isLoginInterceptor(ctx,next){

    let user = ctx.session.loginInfo;

    let {path} = ctx.request;
    if(sysConfig.enableAskPathByNoLogin.findIndex(item=>item==path)!=-1){
        log4jsHelper.info(`该请求可不登录`,'frame');
        await next();
    }else if(!user){
        log4jsHelper.info(`登录校验未通过`,'frame');
        resCon.setError(ctx,errorCode.CODE_NOT_LOGGED,"未登录");
    }else{
        ctx.session.loginInfo = user;
        await next();
    }



}



module.exports = function(){
    return async (ctx,next)=>{
        await isLoginInterceptor(ctx,next);
    }
}