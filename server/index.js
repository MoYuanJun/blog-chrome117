const Koa = require('koa');
const Router = require('@koa/router');
 
const app = new Koa();
const router = new Router();

router.get('/todo-list', (ctx) => {
  ctx.status = 200;
  ctx.body = '11';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);