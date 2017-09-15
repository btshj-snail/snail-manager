/**
 * Created by snail on 17-9-15.
 */
let snailUtils = {

    getRandomNumber(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    },

    getRandomStr(len=8,hasTimestrap=true){
        let str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        let result="",resultAry = [];
        while(--len){
            let index = snailUtils.getRandomNumber(0,str.length-1);
            resultAry.push(str.charAt(index));
        }

        result = resultAry.join("")

        if(hasTimestrap){
            result = result+(new Date().getTime());
        }

        return result;
    }

}



module.exports = snailUtils;