# Todo List

 할 일 목록을 관리하는 To Do 서비스입니다. 사용자는 할 일 목록을 추가, 수정, 삭제할 수 있으며, 각 할 일의 세부 정보를 확인할 수 있습니다.

## 주요 기능

할 일 목록 페이지 (/)
- 할 일 목록을 TODO, DONE 항목으로 나누어 볼 수 있습니다.
- 할 일 작성 후, 목록에 추가할 수 있습니다.
- 할 일의 체크박스를 클릭하여 진행 상태를 변경할 수 있습니다.

할 일 상세 페이지 (/items/{itemId})
- 할 일의 이름을 변경할 수 있습니다
- 할 일의 메모를 추가, 변경할 수 있습니다.
- 할 일의 이미지를 추가, 변경할 수 있습니다.
- 할 일을 삭제할 수있습니다.

## 기술 스택
Next.js, TypeScript, Zustand, React Query, styled-components

## 프로젝트 구조

```plaintext
public/               # Public 디렉토리, 정적 파일 저장
├── icons/            # 아이콘 파일들
├── images/           # 이미지 파일들
src/                  # 소스 코드 디렉토리
├── apis/             # API 호출 관련 코드
├── app/              # 페이지 및 레이아웃 관련 코드
│   ├── item/         # 할 일 상세 페이지      
├── item/             # 특정 아이템 관련 페이지
├── globals.css       # 전역 스타일
├── layout.tsx        # 레이아웃 컴포넌트
├── page.style.ts     # 페이지 스타일 정의
├── page.tsx          # 페이지 컴포넌트
├── components/       # 재사용 가능한 컴포넌트 모음
│   ├── common/       # 공통 컴포넌트
│   ├── Header/       # 헤더 컴포넌트
│   ├── ImageUploader/ # 이미지 업로드 컴포넌트
│   ├── Memo/         # 메모 컴포넌트
│   ├── SearchBar/    # 할 일 추가 컴포넌트
│   ├── TodoList/     # 할 일 목록 컴포넌트
├── constants/        # 상수 모음
├── hooks/            # 커스텀 훅
├── stores/           # Zustand 상태 관리
├── types/            # TypeScript 타입 정의
└── utils/            # 유틸리티 함수
```

## 설치 및 실행 방법

```bash
# 리포지토리 클론
git clone https://github.com/{username}/todo-list.git

# 프로젝트 디렉토리로 이동
cd todo-list

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 확인
http://localhost:3000
```
