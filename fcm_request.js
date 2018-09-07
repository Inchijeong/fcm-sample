var fetch = require("node-fetch");

// 알림 옵션
var notification = {
    'title': '가라가라',
    'body': '와라와라',
    'icon': 'firebase-logo.png',
    'click_action': 'http://www.naver.com'
};

// 서버 키
// Firebase 프로젝트 생성 -> 프로젝트 설정 -> 클라우드 메시징 -> 서버키 -> 복사
var serverKey = "";

// 토큰 키 -> 해당 프로젝트를 호스팅하여 사용자 기기로 부터 받아온 tokenKey(public/Index.html 먼저 참조)
var tokenKey = '';

// FCM 에 알림 보내기 요청
function sendFCM(serverKey, tokenKey){
    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
                'Authorization': 'key=' + serverKey,
                'Content-Type': 'application/json'
            },
        'body': JSON.stringify({
            'notification': notification,
            'to': tokenKey
            })
        }).then(function(response) {
            console.log('success!');
            // console.log(response);
        }).catch(function(error) {
            console.log('error!');
            console.error(error);
        });
}

sendFCM(serverKey, tokenKey);