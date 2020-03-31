const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router({
	prefix: '/api'
});
const port = 9000;

router.get('/user', (ctx, next) => {
	ctx.body = 'User页面-koa' + ctx.params.id;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, console.log(`成功打印,启动端口为${port}`));
