/**
 * Created by snail on 17-9-8.
 */

const resCon = require('../frame/controller/responseConstruct');
const LoginServer = require('../server/loginServer');
const fs = require("fs");

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
    if(!user){
        resCon.setError(ctx);
    }else{
        resCon.setOK(ctx,user);
    }

    await next();
}


const loginOut = async (ctx, next) => {
    ctx.session.loginInfo = null;
    resCon.setOK(ctx);
};

module.exports = {
    'POST /loginIn': loginIn,
    'POST /loginInfo': loginInfo,
    'POST /loginOut': loginOut,
}