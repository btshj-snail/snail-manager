/**
 * Created by snail on 17-9-15.
 */

'use strict'

const {Store} = require("koa-session2");
const sessionStoreHelper = require("./sessionStoreHelper");

class SessionStore extends Store {
    constructor() {
        super();
    }

    get(sid, ctx) {
        return sessionStoreHelper.get(sid);
    }

    set(session, {sid = this.getID(24), maxAge = 1000000} = {}, ctx) {
        try {
            sessionStoreHelper.set(session, sid)
        } catch (e) {
        }
        ;
        return sid;
    }

    destroy(sid,ctx){
        sessionStoreHelper.delete(sid);
    }


}


module.exports = SessionStore;