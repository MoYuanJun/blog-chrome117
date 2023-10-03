const Koa = require('koa');
const cors = require('@koa/cors')
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/todo-list', (ctx) => {
  ctx.status = 200;
  ctx.body = '11';
});

// 跨域设置
app.use(cors({
  maxAge: 5,
  origin: "*",
  credentials: true,
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content-Type'],
  exposeHeaders: ['Content-Type'],
}));

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000);