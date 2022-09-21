var body = $response.body;
var obj = JSON.parse(body);

{
  "data": [{
    "name": "BASE SERVICE",
    "type": "BASE",
    "orderInfoList": [{
      "orderNumber": "0145992810561326649540192396423832728015",
      "beginAt": "2022-09-21T01:27:50Z",
      "endAt": "2077-07-07T12:17:13Z";",
      "purchaseType": "NORMAL",
      "deviceCount": 3,
      "appending": true
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
