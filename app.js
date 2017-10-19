/**
 *
 * Created by snail on 17-9-8.
 */
const path = require('path');
const Koa = require('koa');
const cors = require('koa-cors');
const controllerScan = require('./frame/controller/controllerScan');
const sysConfig = require('./config/sysConfig');
const appResponseCtrl = require('./frame/controller/appResponseCtrl');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
// const session = require('koa-session2');
const session = require('koa-session-redis');
const staticSever = require('koa-static');
const cookie = require('cookie-signature');
const requestInterceptor = require('./frame/controller/requestInterceptor');


console.log('-------------------------------------启动服务-----------------------------------------------')
const app = new Koa();

const server_port = 3200;

app.keys = ["SNAILCOOKIE"];

app.use(cors(
    {
        credentials: true,
        // origin: "http://127.0.0.1:8083",
        methods: ["POST","GET","PUT","DELETE"],
    }
));

app.use(koaLogger())

app.use(bodyParser());

app.use(session({
    key: "KOA2SESSIONREDIS",
    store: {
        host:'127.0.0.1',
        port:6379,
        ttl: 30*60,//秒为单位
    },
    cookie:{
        signed:true,
    }
}))

app.use(requestInterceptor())

app.use(staticSever(path.join(process.cwd(), "./webApp")))


app.use(controllerScan(sysConfig.controller_dir))

app.use(async (ctx, next) => {
    appResponseCtrl(ctx, ctx.response.status);
    await next();
})


app.listen(server_port);

app.on('error', function (ex) {
    console.log(ex)
    console.log('启动失败')
})

console.log('app started at port ' + server_port)
console.log('-------------------------------------启动成功-----------------------------------------------')