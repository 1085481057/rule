/*

Quantumult X 脚本:
Picsew Unlocks （by LTribe）
Picsew download link : http://t.cn/AiWC7BVq

[rewrite_local]
# Picsew Unlocks （by LTribe）
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body Picsew.js

[mitm]
hostname = buy.itunes.apple.com,

*/

let obj = JSON.parse($response.body);
obj = {
  "status": 3,
  "msg": "success",
  "data": {
    "last_vip_type": 3,
    "vip_renew_type": 3,
    "vip_plus_expire": 9999999999,
    "vip_plus_renew_type": 3,
    "vip_plus_product_code": 3,
    "multi_lang_count": 1,
    "visitor_expire_ts": 3,
    "vip_year": 3,
    "current_vip_level": "3",
    "vip_type": 3,
    "vip_plus_type": 3,
    "vip_stat": 3,
    "product_code": 3,
    "vip_expire": 9999999999,
    "current_vip_renewals_status": "3"
  }
};

$done({body: JSON.stringify(obj)});
