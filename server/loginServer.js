/**
 * Created by snail on 17-9-12.
 */
'use strict'

const UserDao = require('../dao/userDao');

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
        if(user && user.passwd==passwd){
            return user;
        }
        return null;
    }

}

module.exports = LoginServer;