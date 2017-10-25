/**
 * Created by snail on 17-10-25.
 */
'use strict'

const UserDao = require('../dao/userDao');
const log4jsHelper = require('../frame/log/log4jsHelper');
const userDao = new UserDao();

const data = [
];


class UserServer{
    constructor(){}

    /**
     * 获取所有用户
     * @returns {Array}
     */
    getUserList(){
        return data;
    }


    getUserById(){
        return null;
    }
}


module.exports = UserServer;