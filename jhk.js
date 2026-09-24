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
    "userTypeName": "SVIP会员",
    "whiteList": true,
    "userType": 1,
    "phone": "",
    "isVip": 1,
    "isShowIosVip": false,
    "activeMemberCardId": 1,
    "expiresType": 0,
    "isSvip": true,
    "openid": "oAmqG5Kpm2cDtihRs2qQDJ2rOuGc",
    "memberCardId": 1,
    "vipEtime": 999999999,
    "excessDays": 99999999,
    "nickName": "微信用户",
    "superMemberCardId": 2,
    "userSn": "6170092",
    "isExpires": 0,
    "isWatermark": false,
    "headImgUrl": "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"
  },
  "code": 200
};

$done({body: JSON.stringify(obj)});
