/*
 * File: alarm.js
 * Project: iot-client
 * Description:
 * Created By: Tao.Hu 2019-09-01
 * -----
 * Last Modified: 2019-09-01 04:45:04 pm
 * Modified By: Tao.Hu
 * -----
 */

const fetch = require('node-fetch');

const url = 'http://172.26.204.222:88/params.cgi';

function checkStatus(res) {
  if (res.status === 200) {
    return res;
  }
  throw new Error(res.statusText);
}

async function setParams() {
  const body = {
    cmd: 'setparams',
    params: {
      // ver: '1.0',
      // alarmrecv: { port: '502', timeout_lan: '30', timeout_gprs: '180' },
      // httpserver: { port: '88' },
      datareport: {
        1: { used: '1', url: 'http://192.168.0.106:8888' },
        // 2: { used: '0', url: 'http://192.168.1.18:45678/d12' },
        // 3: { used: '0', url: 'http://192.168.1.18:45678/d13' },
        // 4: { used: '0', url: 'http://192.168.1.18:45678/d14' },
        // 5: { used: '0', url: 'http://192.168.1.18:45678/d15' },
      },
    },
  };
  const data = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'text/plain' },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  console.log('data:', JSON.stringify(data));
  return data;
}

setParams();
