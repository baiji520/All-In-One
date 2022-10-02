var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1361012099,
    "app_item_id": 1361012099,
    "bundle_id": "com.photo.beautytuneapp",
    "application_version": "2.33.102",
    "download_id": 730000970737934,
    "version_external_identifier": 851202635,
    "receipt_creation_date": "2022-09-28 18:12:47 Etc/GMT",
    "receipt_creation_date_ms": "1664388767000",
    "receipt_creation_date_pst": "2022-09-28 11:12:47 America/Los_Angeles",
    "request_date": "2022-09-28 18:12:48 Etc/GMT",
    "request_date_ms": "1664388768088",
    "request_date_pst": "2022-09-28 11:12:48 America/Los_Angeles",
    "original_purchase_date": "2022-09-28 17:51:36 Etc/GMT",
    "original_purchase_date_ms": "1664387496000",
    "original_purchase_date_pst": "2022-09-28 10:51:36 America/Los_Angeles",
    "original_application_version": "2.33.102",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.photo.facelab.wt1week3dtrial",
      "transaction_id": "730000970737934",
      "original_transaction_id": "730000970737934",
      "purchase_date": "2022-09-28 18:11:02 Etc/GMT",
      "purchase_date_ms": "1664388662000",
      "purchase_date_pst": "2022-09-28 11:11:02 America/Los_Angeles",
      "original_purchase_date": "2022-09-28 18:11:03 Etc/GMT",
      "original_purchase_date_ms": "1664388663000",
      "original_purchase_date_pst": "2022-09-28 11:11:03 America/Los_Angeles",
      "expires_date": "2099-09-09 18:11:02 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2099-09-09 11:11:02 America/Los_Angeles",
      "web_order_line_item_id": "730000970737934",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
      "quantity": "1",
      "product_id": "com.photo.facelab.wt1week3dtrial",
      "transaction_id": "730000970737934",
      "original_transaction_id": "730000970737934",
      "purchase_date": "2022-09-28 18:11:02 Etc/GMT",
      "purchase_date_ms": "1664388662000",
      "purchase_date_pst": "2022-09-28 11:11:02 America/Los_Angeles",
      "original_purchase_date": "2022-09-28 18:11:03 Etc/GMT",
      "original_purchase_date_ms": "1664388663000",
      "original_purchase_date_pst": "2022-09-28 11:11:03 America/Los_Angeles",
      "expires_date": "2099-09-09 18:11:02 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2099-09-09 11:11:02 America/Los_Angeles",
      "web_order_line_item_id": "730000970737934",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20443544"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.photo.facelab.wt1week3dtrial",
    "product_id": "com.photo.facelab.wt1week3dtrial",
    "original_transaction_id": "730000970737934",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
