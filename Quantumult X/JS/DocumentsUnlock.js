var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1470560916,
    "receipt_creation_date" : "2022-09-09 13:36:09 Etc/GMT",
    "bundle_id" : "com.ziheng.OneBox",
    "original_purchase_date" : "2022-09-09 11:40:07 Etc/GMT",
    "in_app" : [{
      "quantity": "1",
      "product_id": "com.ziheng.OneBox.plus",
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
    }],
    "adam_id" : 1470560916,
    "receipt_creation_date_pst" : "2022-09-09 06:36:09 America/Los_Angeles",
    "request_date" : "2022-09-09 13:36:46 Etc/GMT",
    "request_date_pst" : "2022-09-09 06:36:46 America/Los_Angeles",
    "version_external_identifier" : 851875912,
    "request_date_ms" : "1662730606390",
    "original_purchase_date_pst" : "2022-09-09 04:40:07 America/Los_Angeles",
    "application_version" : "31",
    "original_purchase_date_ms" : "1662723607000",
    "receipt_creation_date_ms" : "1662730569000",
    "original_application_version" : "8",
    "download_id" : 501733452868313600
  },
  "status" : 0,
  "environment" : "Production"
}

body = JSON.stringify(obj);
$done({body});
