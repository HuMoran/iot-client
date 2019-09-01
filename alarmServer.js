/*
 * File: alarmServer.js
 * Project: iot-client
 * Description:
 * Created By: Tao.Hu 2019-09-01
 * -----
 * Last Modified: 2019-09-01 05:11:33 pm
 * Modified By: Tao.Hu
 * -----
 */

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.post('/alarm', (ctx, next) => {
  const data = {
    result: '1',
    datatype: 'alarmevent',
    data: {
      cmd: 'getuploadevent',
      event: [
        {
          acc: '5003',
          netid: '1',
          hosttype: '3',
          cid: '602',
          recovery: '0',
          host: '0',
          dev: '0',
          subsystem: '0',
          zone: '0',
          user: '0',
          serialno: '0C4E54472F64',
          comefrom: '192.168.3.251',
          eventtime: '2019-06-3 16:05:07',
          recvtime: '2019-06-3 16:05:09',
        },
      ],
    },
  };
  console.log('received data:', ctx.request.body);
  ctx.set({ 'Content-Type': 'Application/json;charset=utf-8' });
  ctx.status = 200;
  ctx.body = { result: '0' };
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8888);
console.log('server listen on: http://localhost:8888');
