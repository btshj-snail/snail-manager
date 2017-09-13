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
        log4jsHelper.info('准备通过名称查询用户信息','frame')
        log4jsHelper.debug('准备通过名称查询用户信息','frame')
        log4jsHelper.warn('准备通过名称查询用户信息','business')
        log4jsHelper.error('准备通过名称查询用户信息',null,'frame')
        if (userName = "jack") {
            return {
                userName: 'jack',
                age: 18,
                passwd: '12345678'
            }
        }
        return null;
    }
}

module.exports = UserDao;