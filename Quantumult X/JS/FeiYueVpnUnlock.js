body = $response.body.replace(/expiredAt":\d+/g, 'expiredAt":3392814600000').replace(/status":\d/g, 'status":3').replace(/type":\d/g, 'type":3').replace(/memberLevel":\d/g, 'memberLevel":1');
$done({body});
