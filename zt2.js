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
  "ok": true,
  "errorCode": 0,
  "text": null,
  "moreInfo": null,
  "now": "2025-12-14T00:37:39.750Z",
  "version": "1.0.0",
  "data": {
    "id": 8532313,
    "userId": "5aa7aaf9e666862ed138c190",
    "memberType": "SVIP",
    "membershipType": "YEAR_CARD",
    "orderNo": "1734140009123456789",
    "memberNo": "156894612040",
    "autoRenew": false,
    "status": 1,
    "statusTrack": "active",
    "paidStatus": 0,
    "paidStatusTrack": "paid",
    "gmtEffective": 1594612040000,
    "gmtCurrentTypeEffective": 11594612040000,
    "gmtCurrentTypeExpire": 1595260799000,
    "gmtExpire": 9595260799000,
    "totalEffectiveDays": 99999,
    "currentEffectiveDays": 0,
    "stockFlag": false
  }
};

$done({body: JSON.stringify(obj)});
