var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/info';

if (url.indexOf(vip) != -1) {
    obj.data.expireAt = "2077-07-07T12:17:13Z";
    obj.data.maxDeviceCount = 3;
    obj.data.expireRemindType = "MANDATORY",
    obj.data.leftDays = 3650;
    obj.data.role = "pandavpn_1year";
    obj.data.rewardPoints = 300;
    body = JSON.stringify(obj);
}
$done({body});
