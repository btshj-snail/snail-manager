/**
 * Created by snail on 17-9-8.
 */

const path = require('path');
const fs = require('fs');

const fileUtils = {
    /**
     * 查询指定路径下的所有文件
     * 采用同步的方式
     * @param filePath
     * @returns {Array}
     */
    queryAllFilesSync(filePath){
        let filesAry = [];
        let exist = fs.existsSync(filePath)
        console.log(`文件夹${filePath}:${exist}`)
        if (exist) {
            let files = fs.readdirSync(filePath);
            if (files.length > 0) {
                for (let f of files) {
                    let _path = path.join(filePath, f);
                    let stat = fs.statSync(_path);
                    if (stat.isFile()) {
                        filesAry.push(_path)
                    } else {
                        let ary = fileUtils.queryAllFilesSync(_path);
                        filesAry = filesAry.concat(ary);
                    }
                }
            }
        }
        return filesAry;
    }
}

module.exports = fileUtils;

// console.log(fileUtils.queryAllFilesSync(path.join(process.cwd(),'controller')))