var objc = JSON.parse($response.body);

    objc = 
{"bundleId":"com.readdle.ReaddleDocsIPad","chargingPlatform":"iOS AppStore","receiptId":1505921661000,"originalTransactionId":430001223657482,"inAppStates":[{"type":"subscription","productId":"com.readdle.ReaddleDocsIPad.subscription.month10_allusers","originalTransactionId":430001223657482,"productName":"subscription","isEligibleForIntroPeriod":false,"subscriptionExpirationDate":"07:45 09/09/2029","subscriptionState":"trial","subscriptionAutoRenewStatus":"autoRenewOff","isInGracePeriod":false,"isInBillingRetryPeriod":false,"entitlements":[]},{"type":"custom purchase","productId":"documents6-user","originalTransactionId":"0000","entitlements":[]}],"receiptStatus":"ok","statisticsInfo":{"events":[]}}


$done({body : JSON.stringify(objc)});
