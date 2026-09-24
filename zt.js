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
  "member_id" : 4353309,
  "type_id" : "vip",
  "openid" : "oeC0Q41z9onOBDKo2Eqz9UPkeECk",
  "session_key" : "",
  "success" : true
};

$done({body: JSON.stringify(obj)});
