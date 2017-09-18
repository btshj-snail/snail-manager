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
    ctx.session = userInfo;
    console.log(ctx.session)
    await next();

}

const loginPage = async (ctx,next)=>{
    let htmlPath = path.join(process.cwd(),'/webApp/test.html');
    console.log(htmlPath)
    let htmlFile_exits = fs.existsSync(htmlPath);
    if(!htmlFile_exits){
        ctx.response.body = "未找到界面";
    }

    let content = fs.readFileSync(htmlPath);
    ctx.response.body = content;
    ctx.response.type='text/html';
    console.log(ctx.session)
    await next();
}

const loginInfo = async(ctx,next)=>{
    let user = ctx.session;
    console.log(user)
    resCon.setOK(ctx,user);
    await next();
}

module.exports = {
    'POST /loginIn': loginIn,
    'GET /loginPage': loginPage,
    'POST /loginInfo':loginInfo,
}