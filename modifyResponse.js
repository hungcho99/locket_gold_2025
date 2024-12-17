
var obj = JSON.parse($response.body);
obj.subscriber = {
  subscriptions: {
    "com.ohoang7.premium.yearly": {
      is_sandbox: false,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      period_type: "normal",
      expires_date: "2099-12-18T01:04:17Z",
      grace_period_expires_date: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "2024-07-28T01:04:18Z",
      purchase_date: "2024-07-28T01:04:17Z",
      store: "app_store"
    }
  },
  entitlements: {
    pro: {
      grace_period_expires_date: null,
      purchase_date: "2024-07-28T01:04:17Z",
      product_identifier: "com.ohoang7.premium.yearly",
      expires_date: "2099-12-18T01:04:17Z"
    }
  }
};

$done({ body: JSON.stringify(obj) });
