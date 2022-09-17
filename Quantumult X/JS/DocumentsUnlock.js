var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/profile';

if (url.indexOf(vip) != -1) {
    obj.receipt.in_app.quantity = "1";
    obj.receipt.in_app.purchase_date = "2021-11-25 17:07:45 Etc/GMT";
    obj.receipt.in_app.purchase_date_ms = "1637860065000";
    obj.receipt.in_app.purchase_date_pst = "2021-11-25 09:07:45 America/Los_Angeles";
    obj.receipt.in_app.expires_date = "2029-09-09 17:07:45 Etc/GMT";
    obj.receipt.in_app.expires_date_ms = "4092647115000";
    obj.receipt.in_app.expires_date_pst = "2029-09-09 09:07:45 America/Los_Angeles";
    obj.receipt.in_app.in_app_ownership_type = "PURCHASED";
    obj.latest_receipt_info.quantity = "1";
    obj.latest_receipt_info.purchase_date = "2021-11-25 17:07:45 Etc/GMT",
    obj.latest_receipt_info.purchase_date_ms = "1637860065000",
    obj.latest_receipt_info.purchase_date_pst = "2021-11-25 09:07:45 America/Los_Angeles",
    obj.latest_receipt_info.expires_date = "2029-09-09 17:07:45 Etc/GMT";
    obj.latest_receipt_info.expires_date_ms = "4092647115000";
    obj.latest_receipt_info.expires_date_pst = "2029-09-09 09:07:45 America/Los_Angeles";
    obj.latest_receipt_info.in_app_ownership_type = "PURCHASED";
    
    body = JSON.stringify(obj);
}
$done({body});




var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1470560916,
    "app_item_id": 1470560916,
    "application_version": "31",
    "download_id": 500935934584949171,
    "in_app": [{
      "quantity": "1",
      "transaction_id": "730000766600650",
      "original_transaction_id": "730000766600650",
      "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
      "purchase_date_ms": "1637860065000",
      "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
      "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT",
      "original_purchase_date_ms": "1637860068000",
      "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
      "expires_date": "2029-09-09 17:07:45 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2029-09-09 09:07:45 America/Los_Angeles",
      "web_order_line_item_id": "730000330755327",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "transaction_id": "730000766600650",
    "original_transaction_id": "730000766600650",
    "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
    "purchase_date_ms": "1637860065000",
    "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
    "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT",
    "original_purchase_date_ms": "1637860068000",
    "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
    "expires_date": "2029-09-09 17:07:45 Etc/GMT",
    "expires_date_ms": "4092647115000",
    "expires_date_pst": "2029-09-09 09:07:45 America/Los_Angeles",
    "web_order_line_item_id": "730000330755327",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20902245"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "original_transaction_id": "730000766600650",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
