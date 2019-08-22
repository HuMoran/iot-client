/*
 * File: index.js
 * Project: iot-client
 * Description:
 * Created By: Tao.Hu 2019-08-22
 * -----
 * Last Modified: 2019-08-22 04:18:17 pm
 * Modified By: Tao.Hu
 * -----
 */

const iot = require('alibabacloud-iot-device-sdk');

const device = iot.device({
  productKey: '<productKey>',
  deviceName: '<deviceName>',
  deviceSecret: '<deviceSecret>',
});
device.subscribe('/<productKey>/<deviceName>/get');
device.on('connect', () => {
  console.log('connect successfully!');
  device.publish('/<productKey>/<deviceName>/update', 'hello world!');
});
device.on('message', (topic, payload) => {
  console.log(topic, payload.toString());
});