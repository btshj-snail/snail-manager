/**
 * Created by snail on 17-9-12.
 */

const {CODE_OK,CODE_COMMON_ERROR} = require("../exceptionCode");

const bodyDataConstruct = {
    setOK(data={}){
        return {
            code: CODE_OK,
            msg: "",
            data: data
        }
    },
    setError(code=CODE_COMMON_ERROR,msg){
        return {
            code,
            msg:msg||'',
            data:{}
        }
    }
}

module.exports = bodyDataConstruct;


