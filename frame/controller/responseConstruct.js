/**
 * Created by snail on 17-9-12.
 */
'use strict'

const bodyDataConstruct = require('./bodyDataConstruct');
const {CODE_OK,CODE_COMMON_ERROR} = require("../exceptionCode");

const resCon = {
    setOK(ctx,data){
        ctx.response.type = 'application/json';
        ctx.response.body = bodyDataConstruct.setOK(data);
    },
    setError(ctx,code,msg){
        if (typeof code == 'string' && !msg) {
            msg = code;
            code = CODE_COMMON_ERROR;
        } else if (typeof code == 'string' && !!msg) {
            throw '调用setError方法,第二个和第三个参数都是string'
        }
        ctx.response.type = 'application/json';
        ctx.response.body = bodyDataConstruct.setError(code, msg);
    }
}

module.exports = resCon;