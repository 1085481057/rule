/*
* Author: @fmz200
* Date: 2023-09-08 09:00:00
* Description: 微信朋友圈广告过滤
* Version: 1.0.0
*/
function removeWeChatMomentsAds(data) {
  try {
    const list = JSON.parse(data.body);
    const resultList = list.filter(item => {
      // 过滤朋友圈广告
      return item.appInfo && item.appInfo.sourceName && item.appInfo.sourceName.indexOf('广告') === -1;
    });
    data.body = JSON.stringify(resultList);
    console.log('WeChat Moments Ad Removal: ' + (list.length - resultList.length) + ' ads removed.');
  } catch (e) {
    console.log('WeChat Moments Ad Removal Error: ' + e);
  }
  return data;
}

function removeWeChatMomentsAdsBody(data) {
  try {
    const body = JSON.parse(data.body);
    if (body.appInfo && body.appInfo.sourceName && body.appInfo.sourceName.indexOf('广告') > -1) {
      data.status = 'HTTP/1.1 204 No Content';
      delete data.body;
      delete data.headers['Content-Type'];
      console.log('WeChat Moments Ad Removal: 1 ad removed from body.');
    }
  } catch (e) {
    console.log('WeChat Moments Ad Removal Error: ' + e);
  }
  return data;
}

if ($request.url.indexOf('mp.weixin.qq.com/mpf/ad_') > -1) {
  $done(removeWeChatMomentsAdsBody($request));
} else {
  $done(removeWeChatMomentsAds($response));
}
