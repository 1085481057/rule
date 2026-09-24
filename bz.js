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
    "vip_end_time" : "999999999",
    "vip_type" : "终身vip",
    "is_vip" : 3
  },
  "errcode" : 0,
  "errmsg" : "success"
};

$done({body: JSON.stringify(obj)});
