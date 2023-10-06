const Koa = require('koa');
const cors = require('@koa/cors')
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/v3/todo-detail', (ctx) => {
  ctx.status = 200;
  ctx.body = { id: '1', title: '要编辑标题值', content: '星象衔新宠萨达撒大声地' };
});

router.get('/v2/todo-list', (ctx) => {
  ctx.status = 200;
  ctx.body = [
    { id: '1', title: '要编辑标题值' }, 
    { id: '2', title: '要添加新标头' }, 
    { id: '3', title: '要删除标头覆盖' },
  ];
});

// 跨域设置
app.use(cors({
  maxAge: 5,
  origin: "http://127.0.0.1:8080",
  credentials: true,
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content-Type'],
  exposeHeaders: ['Content-Type'],
}));

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000);