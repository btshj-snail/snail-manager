/**
 * Created by snail on 17-9-12.
 */

const sysConfig = require("../../config/sysConfig");

const requestLog = sysConfig.requestLog;

module.exports = function (){
    return async (ctx, next) => {
        if(requestLog){
            console.log(ctx.method,ctx.header.host+ctx.url,":");
            console.log(ctx.response.body);
        }

        await next();
    };
}