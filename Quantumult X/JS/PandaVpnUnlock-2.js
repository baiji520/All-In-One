var body = $response.body;
var obj = JSON.parse(body);

{
  "data": [{
    "name": "BASE SERVICE",
    "type": "BASE",
    "orderInfoList": [{
      "orderNumber": "10086",
      "endAt": "2925-06-16T11:23:03Z",
    }]
  }, {
    "name": "叠加设备",
    "type": "APPENDING_DEVICE",
    "orderInfoList": []
  }, {
    "name": "定制线路",
    "type": "CUSTOM_CHANNEL",
    "orderInfoList": []
  }]
}

$done({body});
