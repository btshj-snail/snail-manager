/**
 * Created by snail on 17-10-13.
 */
'use strict'

import Domain from './domain';

/**
 * 领域对象基础对象
 */

class BaseDomain extends Domain{
    constructor(obj){
        super(obj);

        //id
        this.id="";
        //创建时间
        this.createDate=new Date().getTime();



        this._init(obj);
    }

    _init(obj){
        let {id,createDate} = obj;
        if(id!==undefined) this.id = id;
        if(createDate!==undefined) this.createDate = createDate;
    }


}