/**
 * Created by snail on 17-9-8.
 */
const Koa = require('koa');
const controller = require('./frame/controller/controller');
const sysConfig = require('./config/sysConfig');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const server_port = 3200;

app.use(async (ctx, next) => {

    await next();
})

app.use(async (ctx, next) => {
    let start = new Date().getTime();
    await next();
    console.log(`耗时:${new Date().getTime() - start}`);
})

app.use(bodyParser());


app.use(controller(sysConfig.controller_dir))

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = "text/html";
//     ctx.response.body = "<h1>hello node js</h1>"
// });

app.listen(server_port);
console.log('app started at port ' + server_port)