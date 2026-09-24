/*

Quantumult X 脚本:
Xmind Unlock Annual Subscriptions （by LTribe）
Xmind Download Link : http://t.cn/A6zhp3Bm
Thanks To@xiaozhuolao's membership data.

[rewrite_local]
# Xmind Unlock annual subscriptions （by LTribe）
https?:\/\/.*\.xmind\..*\/_res\/(devices|user_sub_status|profile\/) url script-response-body XMind.js


https://vas.wps.cn/query/api/v1/list_purchase_info

https://baimiao.uzero.cn/api/advertising/get

https://pc7dong.com/seveng//api/user/islostVip.v1

[mitm]
hostname = *.xmind.*,

*/

const path1 = "/query/api/v1/list_purchase_info";

let obj = JSON.parse($response.body);

  
if ($request.url.indexOf(path1) != -1){
    obj = {
  "data": {
    "token": "eyJhbGciOiJFUzI1NiIsImtleV92ZXJzaW9uIjoyMCwic2NvcGUiOiIqIiwidG9rZW5fdHlwZSI6InByaXZpbGVnZSIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjMwMjgzODAsImlhdCI6MTcyMzAyNzc4MCwibm9uY2UiOjM0MDI1NjQ3LCJ1c2VyaWQiOjM3NjI5NTMxNiwicHJpdmlsZWdlcyI6eyJjbG91ZF9zcGFjZSI6eyJjYWNoZV9hdmFpbGFibGUiOmZhbHNlLCJleHBpcmVfdGltZSI6LTEsInZhbHVlIjo1Mzc4MTQ2MzA0LCJjb25zdW1lZCI6MH0sImNvcnBfZnJlZV9ncm91cF9udW1iZXIiOnsiY2FjaGVfYXZhaWxhYmxlIjp0cnVlLCJleHBpcmVfdGltZSI6LTEsInZhbHVlIjoxMCwiY29uc3VtZWQiOjB9LCJkb2Nfcm9hbWluZyI6eyJjYWNoZV9hdmFpbGFibGUiOnRydWUsImV4cGlyZV90aW1lIjotMSwidmFsdWUiOi0xLCJjb25zdW1lZCI6MH0sImZpbGVudW1faW5fc3luY19mb2xkZXIiOnsiY2FjaGVfYXZhaWxhYmxlIjp0cnVlLCJleHBpcmVfdGltZSI6LTEsInZhbHVlIjoyMDAwMDAwLCJjb25zdW1lZCI6MH0sImZpbGVzaXplX2xpbWl0Ijp7ImNhY2hlX2F2YWlsYWJsZSI6dHJ1ZSwiZXhwaXJlX3RpbWUiOi0xLCJ2YWx1ZSI6MTA0ODU3NjAsImNvbnN1bWVkIjowfSwicmVzb3VyY2VfY2FwYWNpdHkiOnsiY2FjaGVfYXZhaWxhYmxlIjp0cnVlLCJleHBpcmVfdGltZSI6LTEsInZhbHVlIjo1MCwiY29uc3VtZWQiOjB9LCJyZXNvdXJjZV9mb2xkZXJudW0iOnsiY2FjaGVfYXZhaWxhYmxlIjp0cnVlLCJleHBpcmVfdGltZSI6LTEsInZhbHVlIjo1LCJjb25zdW1lZCI6MH0sInJlc291cmNlX3VwbG9hZHNpemUiOnsiY2FjaGVfYXZhaWxhYmxlIjp0cnVlLCJleHBpcmVfdGltZSI6LTEsInZhbHVlIjozMTQ1NzI4LCJjb25zdW1lZCI6MH0sInNtYXJ0X3N5bmMiOnsiY2FjaGVfYXZhaWxhYmxlIjp0cnVlLCJleHBpcmVfdGltZSI6LTEsInZhbHVlIjotMSwiY29uc3VtZWQiOjB9LCJzeW5jX2ZvbGRlciI6eyJjYWNoZV9hdmFpbGFibGUiOnRydWUsImV4cGlyZV90aW1lIjotMSwidmFsdWUiOjEsImNvbnN1bWVkIjowfSwidGVhbV9qb2luX251bWJlciI6eyJjYWNoZV9hdmFpbGFibGUiOnRydWUsImV4cGlyZV90aW1lIjotMSwidmFsdWUiOjEwMDAsImNvbnN1bWVkIjowfSwidXNlcl9mcmVlX2dyb3VwX21lbWJlcl9udW1iZXIiOnsiY2FjaGVfYXZhaWxhYmxlIjp0cnVlLCJleHBpcmVfdGltZSI6LTEsInZhbHVlIjoxMDAsImNvbnN1bWVkIjowfSwidXNlcl9mcmVlX2dyb3VwX251bWJlciI6eyJjYWNoZV9hdmFpbGFibGUiOnRydWUsImV4cGlyZV90aW1lIjotMSwidmFsdWUiOjEwMCwiY29uc3VtZWQiOjB9fX0.VRBr8Yn_XyuXAHWbQO-e0KlRM29E6BBLvOK-c9W2vNI3AFuwrk2dRmYaeJalxX2qLojx9XxlNsOrA8k4yLI_tQ",
    "server_time": 1723027780,
    "merchandises": [
      {
        "sku_key": "12",
        "expire_time": 32495443200,
        "effect_time": 1667308160,
        "name": "稻壳会员",
        "type": "vip"
      },
      {
        "sku_key": "20",
        "expire_time": 32495443200,
        "effect_time": 1667308160,
        "name": "WPS会员",
        "type": "vip"
      },
      {
        "sku_key": "40",
        "expire_time": 32495443200,
        "effect_time": 1667308160,
        "name": "超级会员",
        "type": "vip"
      },
      {
        "sku_key": "vip_pro_plus",
        "expire_time": 32495443200,
        "effect_time": 1667308160,
        "name": "WPS超级会员Pro套餐",
        "type": "vip"
      }
    ]
  },
  "code": 0
};
  
$done({body: JSON.stringify(obj)});
