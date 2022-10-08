var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/user';

if (url.indexOf(vip) != -1) {
    obj.data.value_of_expire_in = 1;
    obj.data.expire_at = 1893456812000;
    obj.data.itunes_subscribed = true;
    obj.data.unit_of_expire_in = "VIP";
    obj.data.max_device_count = 10;
    obj.data.changed = true;
    body = JSON.stringify(obj);
}
$done({body});
