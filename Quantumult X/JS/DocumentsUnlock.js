var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/profile';

if (url.indexOf(vip) != -1) {
    obj.receipt.in_app.quantity = 1;
    obj.receipt.in_app.purchase_date = "2021-11-25 17:07:45 Etc/GMT";
    obj.receipt.in_app.purchase_date_ms = 1637860065000;
    obj.receipt.in_app.purchase_date_pst = "2021-11-25 09:07:45 America/Los_Angeles";
    obj.receipt.in_app.expires_date = "2029-09-09 17:07:45 Etc/GMT";
    obj.receipt.in_app.expires_date_ms = 4092647115000;
    obj.receipt.in_app.expires_date_pst = "2029-09-09 09:07:45 America/Los_Angeles";
    obj.receipt.in_app.in_app_ownership_type = "PURCHASED";
    obj.latest_receipt_info.quantity = 1;
    obj.latest_receipt_info.purchase_date = "2021-11-25 17:07:45 Etc/GMT",
    obj.latest_receipt_info.purchase_date_ms = 1637860065000,
    obj.latest_receipt_info.purchase_date_pst = "2021-11-25 09:07:45 America/Los_Angeles",
    obj.latest_receipt_info.expires_date = "2029-09-09 17:07:45 Etc/GMT";
    obj.latest_receipt_info.expires_date_ms = 4092647115000;
    obj.latest_receipt_info.expires_date_pst = "2029-09-09 09:07:45 America/Los_Angeles";
    obj.latest_receipt_info.in_app_ownership_type = "PURCHASED";
    obj.pending_renewal_info.auto_renew_status = 1;
 
    body = JSON.stringify(obj);
}
$done({body});
