/**
 * Created by snail on 17-9-18.
 */
'use strict'

const sysConfig = require("../../config/sysConfig");
const snailUtils = require("../../utils/snailUtils");
const log4jsHelper = require("../../frame/log/log4jsHelper");
const path = require('path');



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
    // let reqPath = ctx.request.path;
    // let user = ctx.session;
    // let ary = reqPath.split(".");
    // let suffix = ary[ary.length-1];
    // if(sysConfig.enableAskByNoPermission.findIndex(item=>item==suffix)!=-1){
    //     await next();
    // }else{
    //     if(!user.userName && !snailUtils.containInAry(reqPath,sysConfig.enableAskPathByNoLogin)){
    //         log4jsHelper.warn("未登录的请求,跳转到登录界面")
    //         ctx.redirect("/login.html");
    //     }else{
    //         await next();
    //     }
    // }



    await next();


}



module.exports = function(){
    return async (ctx,next)=>{
        await isLoginInterceptor(ctx,next);
    }
}