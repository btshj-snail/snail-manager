/**
 * Created by snail on 17-9-8.
 */
const Koa = require('koa');
const controllerScan = require('./frame/controller/controllerScan');
const sysConfig = require('./config/sysConfig');
const appResponseCtrl = require('./frame/controller/appResponseCtrl');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger')


console.log('-------------------------------------启动服务-----------------------------------------------')
const app = new Koa();

const server_port = 3200;

app.use(koaLogger())

app.use(bodyParser());

app.use(controllerScan(sysConfig.controller_dir))

app.use(async (ctx, next) => {
    appResponseCtrl(ctx, ctx.response.status);
    await next();
})


app.listen(server_port);

app.on('error', function () {
    console.log('启动失败')
})

console.log('app started at port ' + server_port)
console.log('-------------------------------------启动成功-----------------------------------------------')