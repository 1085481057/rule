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
  "msg": "成功",
  "data": {
    "userVipType": 2,
    "expire": false,
    "language": 0,
    "nickName": "FrameIt PRO+",
    "userTypeName": "FrameIt PRO+",
    "memberCardId": 2,
    "isVip": true,
    "excessDays": 99999999,
    "isNew": true,
    "userType": 2,
    "nextRenewTime": null,
    "vipStartTimestamp": 6188377777,
    "userTypeNameNew": "Frameit PRO+",
    "isApple": true,
    "email": "22dhcfqgw4@privaterelay.appleid.com",
    "headImgUrl": "https://oss.aiframeit.com/app/images/default_head_image.png",
    "subscribe": true,
    "vipEndTimestamp": 9999999999,
    "renewStatus": false,
    "vipLevel": 2,
    "userId": 1570996
  },
  "code": 200
};

$done({body: JSON.stringify(obj)});
