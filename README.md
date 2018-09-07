Firebase Cloud Messaging Tutorial
=================================

1. 해당 프로젝트를 Clone.
2. 상대방의 토큰 값을 받기 위한 프로젝트 설정.
    1. $ npm init
    2. $ npm install firebase-tools 또는 $ npm install -g firebase-tools
    3. $ firebase login -> 긍정
    4. $ firebase init (firebase 프로젝트로 만들어주는 과정, 스페이스바로 선택 엔터로 확인, hosting을 선택하면됨.)
    5. $ firebase deploy (git의 push로 생각하면 편함)
3. 알림 받고자 하는 사용자의 컴퓨터로 위 호스팅된 경로로 접속.
4. 토큰키 복사.
5. 알림을 보내기 위한 fcm_request.js 에 서버 키& 토큰 키 수정.
6. $ npm install node-fetch
7. $ node fcm_request
8. 해당 기기에 알림이 왔는지 확인.
    * 알림이 안왔다면 해당 기기의 알림 설정 먼저 확인
