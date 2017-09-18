/**
 * Created by snail on 17-9-12.
 */
'use strict'

const UserDao = require('../dao/userDao');
const log4jsHelper = require('../frame/log/log4jsHelper');
const userDao = new UserDao();

class LoginServer {
    constructor(){}

    /**
     * 登录
     * @param userName
     * @param passwd
     * @returns {*}
     */
    loginIn(userName,passwd){
        let user = userDao.queryByName(userName);
        log4jsHelper.debug(`密码:${user.passwd},${passwd}`);
        if(user && user.passwd==passwd){

            return user;
        }
        return null;
    }

}

module.exports = LoginServer;