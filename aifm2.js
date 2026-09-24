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
  "data" : {
    "email" : "22dhcfqgw4@privaterelay.appleid.com",
    "isSuper" : true,
    "title" : "Common",
    "loginStatus" : 0,
    "vipEndTime" : "999999999",
    "userType" : "2"
  },
  "msg" : "成功",
  "code" : 200
};

$done({body: JSON.stringify(obj)});
