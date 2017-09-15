/**
 * Created by snail on 17-9-15.
 */
'use strict'

const snailUtils  = require('../../utils/snailUtils');

class SessionStoreMap {

    constructor() {
        if(!!SessionStoreMap.instance){
            return SessionStoreMap.instance;
        }
        SessionStoreMap.instance = this;

        this._store = {};
        this.maxAge = 30*60*1000; //30分钟

        this._clearTimeout();

    }

    getID(){
        snailUtils.getRandomStr(20,false);
    }

    get(key) {
        if (key in this._store) {
            let {session, time, maxAge} = this._store[key];
            let now = new Date().getTime();
            if (time + maxAge < now) {
                return null;
            }

            return session;
        }

        return null;
    }

    set(session,key=this.getID(),maxAge=this.maxAge){
        this._store[key] = {
            session,
            time:new Date().getTime(),
            maxAge
        }

        return key;
    }

    delete(key){
        try{
            if (key in this._store) {
                delete this._store[key];
            }
            return true;
        }catch (ex){
            return false;
        }


    }

    _clearTimeout(){
        setInterval(()=>{
            this._removeItemByTimeOut();
        },60000)
    }

    _removeItemByTimeOut(){
        for(let o in this._store){
            let now = new Date().getTime();
            let {time,maxAge} = this._store[o];
            if(time+maxAge<now){
                this.delete(o);
            }
        }
    }

}


module.exports = SessionStoreMap;
