# 🛒 AWS-Shopping: 쇼핑몰 시스템 구축 프로젝트 과제1

본 프로젝트는 React 기반 쇼핑몰 구현 과제를 목표로 하며, 현재는 HTML/CSS/JavaScript로 구성된 정적 웹 쇼핑몰 시스템으로 구현되어 있습니다. 또한 GitHub Actions 기반 CI/CD 파이프라인과 AWS S3 정적 호스팅을 핵심으로 합니다.

---

## ✅ 프로젝트 개요
* `index.html`, `style.css`, `script.js`로 구성된 깔끔한 쇼핑몰 UI
* 상품 목록 조회, 장바구니 추가, 수량 변경, 체크아웃 모달을 지원하는 인터랙티브 웹 앱
* 반응형 디자인을 통해 다양한 화면에서 사용 가능한 UI 제공
* AWS S3 정적 웹 호스팅을 통한 배포 지원 및 GitHub Actions 자동 배포 구성

---

## ✨ 주요 기능
* 상품 카드 기반 목록 렌더링
* 장바구니 담기 / 수량 증가 기능
* 장바구니 모달 창으로 선택 상품 확인
* 총 금액 계산 및 구매 완료 메시지 표시
* 장바구니 상태는 세션 내에서 유지

---

## 🧩 기술 스택
* HTML5
* CSS3
* JavaScript (vanilla JS)
* AWS S3 정적 웹 호스팅
* GitHub Actions CI/CD

---

## 📁 프로젝트 구조
* `index.html` - 쇼핑몰 기본 레이아웃 및 장바구니 모달 UI
* `style.css` - 반응형 스타일, 카드 레이아웃, 모달 스타일
* `script.js` - 상품 데이터 관리, DOM 렌더링, 장바구니 로직

---

## 🚀 CI/CD & 배포
* `main` 브랜치에 Push하면 GitHub Actions가 S3 배포를 트리거하도록 구성됩니다.
* AWS 자격증명(`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`)은 GitHub Secrets로 안전하게 관리합니다.
* 배포 워크플로우는 정적 파일을 S3 버킷과 동기화하여 빠른 정적 웹 호스팅을 지원합니다.

---

## 🔗 관련 링크
* `main` 브랜치에 Push하면 GitHub Actions가 S3 배포를 트리거하도록 구성됩니다.
* AWS 자격증명(`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`)은 GitHub Secrets로 안전하게 관리합니다.
* 배포 워크플로우는 정적 파일을 S3 버킷과 동기화하여 빠른 정적 웹 호스팅을 지원합니다.

---

## 🔗 관련 링크
* GitHub Repository: [https://github.com/gksbin04/AWS-Shopping](https://github.com/gksbin04/AWS-Shopping)
* AWS S3 정적 사이트: [http://mybucket-3622.s3-website-us-east-1.amazonaws.com](http://mybucket-3622.s3-website-us-east-1.amazonaws.com)
  * 참고: 해당 AWS URL은 세션 유효기간이 약 4시간으로 제한되어 있습니다.
* CI/CD 시연 영상: [YouTube 시연 영상 바로가기](https://www.youtube.com/watch?v=qiniHBbZfrs)

---

**작성자**: 김한빈