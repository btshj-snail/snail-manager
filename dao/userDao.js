/**
 * Created by snail on 17-9-12.
 */

'use strict'

const log4jsHelper = require('../frame/log/log4jsHelper');

class UserDao{
    constructor(){}

    /**
     * 通过名称查询
     * @param userName
     * @returns {*}
     */
    queryByName(userName) {

        if (userName == "admin") {
            log4jsHelper.debug('名字成功匹配');
            return {
                id:"admin",
                userName: 'admin',
                age: 18,
                passwd: '1111'
            }
        }
        return null;
    }
}

module.exports = UserDao;