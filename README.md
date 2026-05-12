# AWS-Shopping

## 📖 시스템 소개
본 프로젝트는 AWS S3 정적 웹 호스팅을 활용하여 구축된 React 기반 쇼핑몰 웹사이트입니다.

## ✨ 기능 소개
- **상품 디스플레이:** 메인 페이지 및 쇼핑몰 상품 목록 제공
- **반응형 웹 UI:** 다양한 디바이스 환경에 맞춘 사용자 친화적 디자인 적용
- **정적 웹 호스팅:** AWS S3의 정적 웹 사이트 호스팅 기능을 활용한 빠르고 안정적인 서비스 제공
- **자동화된 배포(CI/CD):** GitHub Actions 연동으로 코드 업데이트 시 즉시 AWS S3로 동기화(Sync)되는 자동화 환경 구축

## 🚀 Github Actions 환경 소개 (CI/CD)
본 프로젝트는 **GitHub Actions**를 사용하여 코드가 푸시되면 자동으로 AWS에 배포되도록 CI/CD 파이프라인을 구축했습니다.
- `main` 브랜치에 코드가 push 되면 자동으로 배포 workflow(`deploy.yml`)가 실행됩니다.
- AWS Academy 환경의 특성(임시 자격 증명 필요)을 반영하여, `AWS_SESSION_TOKEN`을 포함한 인증 정보를 GitHub Secrets에 안전하게 등록하여 `aws s3 sync` 명령어로 배포를 진행합니다.

## 🔗 접속 URL (AWS S3)
- **웹사이트 주소:** http://mybucket-3622.s3-website-us-east-1.amazonaws.com
> ⚠️ **참고:** AWS Academy의 세션 유지 시간(4시간) 제한으로 인해 접속이 안 될 수 있습니다. 동작 확인은 아래 시연 영상을 참고해 주시기 바랍니다.

## 🎥 시연 영상 (YouTube)
- **CI/CD 시연 영상 링크:** [여기에_업로드한_유튜브_링크를_적어주세요]
