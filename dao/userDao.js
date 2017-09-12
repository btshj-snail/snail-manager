/**
 * Created by snail on 17-9-12.
 */

'use strict'

class UserDao{
    constructor(){}

    /**
     * 通过名称查询
     * @param userName
     * @returns {*}
     */
    queryByName(userName) {
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