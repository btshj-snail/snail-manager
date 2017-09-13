/**
 * Created by snail on 17-9-13.
 */

'use-strict'

const log4js = require('log4js');
const fs = require('fs');
const path = require('path');



let categories = [];
let loggerInstance = {};


function readLog4jsConfigFile(){
    let cf_path = path.join(__dirname, 'log4js.json');
    let exist = fs.existsSync(cf_path);
    if (!exist) {
        throw '在和log4jsHelper.js文件的文件夹中找不到log4js.json文件';
    }
    let stat = fs.statSync(cf_path);
    if (!stat.isFile()) {
        throw '在和log4jsHelper.js文件的文件夹中log4js.json不是一个文件';
    }
    let config = {};
    try {
        config = JSON.parse(fs.readFileSync(cf_path));
    } catch (ex) {
        throw 'log4js.json不是一个合法的json';
        console.log(ex);
    }

    return config;
}


function assembleConfig(){
    let config = readLog4jsConfigFile();

    if(!config) return null;

    let customCategories = config.customCategories;

    if(!customCategories) return config;

    let env = config.logEnvironment || 'dev';

    for(let o in customCategories){
        categories.push(o);
        config.categories[o] = customCategories[o][env];
    }
    return config;
}

function initLogInstance() {
    categories.forEach(item => {
        loggerInstance[item] = log4js.getLogger(item);
    })
    loggerInstance["default"] = log4js.getLogger("default");

}

log4js.configure(assembleConfig());

initLogInstance();


const log4jsHelper = {
    debug(msg,category="default"){
        msg = msg || "";

        loggerInstance[category].debug(msg)
    },
    info(msg,category="default"){
        msg = msg || "";

        loggerInstance[category].info(msg)
    },
    warn(msg,category="default"){
        msg = msg || "";

        loggerInstance[category].warn(msg)
    },
    error(msg,exp,category="default"){
        msg = msg || "";
        if(exp!=null){
            msg += "\r\n"+exp
        }
        loggerInstance[category].error(msg)
    }
}

module.exports = log4jsHelper;