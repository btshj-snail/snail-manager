/**
 * Created by snail on 17-9-15.
 */
'use strict'

const SessionStoreMap = require('./sessionStoreMap');

module.exports = (function () {

    let sessionStoreMap = new SessionStoreMap();

    function _getSession(key) {
        return sessionStoreMap.get(key);
    }

    function _addSession(session,key) {
        return sessionStoreMap.set(session,key);
    }
    function _deleteSession(session,key) {
        return sessionStoreMap.delete(key);
    }

    return {
        get: _getSession,
        set: _addSession,
        delete:_deleteSession
    }
}());
