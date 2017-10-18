/**
 * Created by snail on 17-9-8.
 */

const resCon = require('../frame/controller/responseConstruct');
const LoginServer = require('../server/loginServer');
const sessionStoreHelper = require('../frame/session/sessionStoreHelper');
const fs = require("fs");
const path = require("path");

const loginServer = new LoginServer();

const loginIn = async (ctx, next) => {
    let {userName, passwd} = ctx.request.body;

    if (!userName) {
        resCon.setError(ctx, 'userName未定义');
        await next();
        return;
    }


    let userInfo = loginServer.loginIn(userName, passwd);

    if (!userInfo) {
        resCon.setError(ctx, '用户名或密码错误');
        await next();
        return;
    }
    resCon.setOK(ctx, userInfo);
    ctx.session.loginInfo = userInfo;
    await next();

}

const loginInfo = async (ctx, next) => {
    let user = ctx.session.loginInfo;
    console.log(user);
    if(!user){
        resCon.setError(ctx);
    }else{
        resCon.setOK(ctx,user);
    }

    await next();
}

module.exports = {
    'POST /loginIn': loginIn,
    'POST /loginInfo': loginInfo,
}