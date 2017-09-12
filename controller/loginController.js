/**
 * Created by snail on 17-9-8.
 */

const resCon = require('../frame/controller/responseConstruct');
const LoginServer = require('../server/loginServer');

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
    await next();

}

module.exports = {
    'POST /loginIn': loginIn,
}