/**
 * Created by snail on 17-9-8.
 */
'use strict'

const fs = require('fs');
const path = require('path');
const sysConfig = require('../../config/sysConfig');
const fileUtils = require('../../utils/fileUtils');


function addMapping(router,mapping){
    for(let url in mapping){
        if(url.startsWith('GET ')){
            let _path = url.substring(4);
            router.get(_path,mapping[url]);
            console.log(`添加路由:${url}`);
        }else if(url.startsWith('POST ')){
            let _path = url.substring(5);
            router.post(_path,mapping[url]);
            console.log(`添加路由:${url}`);
        }else{
            console.log(`无效的地址:${url}`);
        }
    }
}

function addControllers(router,dir){
    let c_path = path.join(process.cwd(),dir);
    let exit = fs.existsSync(c_path);

    if(!exit){
        throw `${c_path}文件夹不存在`;
    }

    let files = fileUtils.queryAllFilesSync(c_path);

    let js_files = files.filter(f=>{
        return f.endsWith('.js');
    })


    for(let f of js_files){
        let mapping = require(f);
        addMapping(router,mapping);
    }
}

module.exports = function (dir){
    if(!dir){
        dir = 'controller'
    }
    let router = require('koa-router')();
    addControllers(router,dir);
    return router.routes();
}