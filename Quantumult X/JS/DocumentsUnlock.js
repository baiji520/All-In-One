var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 364901807,
    "receipt_creation_date" : "2022-09-17 16:33:56 Etc/GMT",
    "bundle_id" : "com.readdle.ReaddleDocsIPad",
    "original_purchase_date" : "2022-09-17 04:27:28 Etc/GMT",
    "in_app" : [{
      "quantity": "1",
      "product_id": "com.readdle.ReaddleDocsIPad.year",
      "transaction_id": "730000766600650",
      "original_transaction_id": "730000766600650",
      "purchase_date": "2022-09-17 12:27:28 Etc/GMT",
      "purchase_date_ms": "1663388848000",
      "purchase_date_pst": "2022-09-30 21:27:28 America/Los_Angeles",
      "original_purchase_date": "2022-09-17 12:27:28 Etc/GMT",
      "original_purchase_date_ms": "1663388848000",
      "original_purchase_date_pst": "2022-09-17 12:27:28 America/Los_Angeles",
      "expires_date": "2029-09-09 17:07:45 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2029-09-09 09:07:45 America/Los_Angeles",
      "is_trial_period": "false",
    }],
    "adam_id" : 364901807,
    "receipt_creation_date_pst" : "2022-09-17 09:33:56 America/Los_Angeles",
    "request_date" : "2022-09-17 16:35:24 Etc/GMT",
    "request_date_pst" : "2022-09-17 09:35:24 America/Los_Angeles",
    "version_external_identifier" : 852168106,
    "request_date_ms" : "1663432524891",
    "original_purchase_date_pst" : "2022-09-16 21:27:28 America/Los_Angeles",
    "application_version" : "8.2.1.883",
    "original_purchase_date_ms" : "1663388848000",
    "receipt_creation_date_ms" : "1663432436000",
    "original_application_version" : "8.2.1.883",
    "download_id" : 501755250169779532
  },
  "status" : 0,
  "environment" : "Production"
};
body = JSON.stringify(obj);
$done({body});
