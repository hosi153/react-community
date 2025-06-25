# React Community

React와 Supabase를 사용한 커뮤니티 게시판 프로젝트입니다.

## 주요 기능

- 📝 **게시물 작성/조회**: Zod 유효성 검사와 React Hook Form을 활용한 게시물 작성
- 📄 **페이지네이션**: 고급 페이지네이션 컴포넌트 (5개 페이지 표시, 그라데이션 효과)
- 🛍️ **상품 목록**: 카테고리별 상품 조회 기능
- 🎨 **반응형 디자인**: Tailwind CSS를 활용한 모던한 UI/UX
- 🔗 **라우팅**: React Router를 통한 SPA 구현

## 기술 스택

- **React** 19.1.0
- **Vite** 6.3.5
- **Tailwind CSS** 4.1.10
- **Supabase** - 백엔드 및 데이터베이스
- **React Router DOM** - 클라이언트 사이드 라우팅
- **React Hook Form** - 폼 상태 관리
- **Zod** - 스키마 유효성 검사
- **ESLint** - 코드 품질 관리

## 시작하기

### 설치

```bash
npm install
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 Supabase 설정을 추가하세요:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

### 린트

```bash
npm run lint
```

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   └── Pagination.jsx   # 고급 페이지네이션 컴포넌트
├── pages/               # 페이지 컴포넌트
│   ├── HomePage.jsx     # 홈페이지
│   ├── PostListPage.jsx # 게시물 목록
│   ├── WritePage.jsx    # 게시물 작성
│   ├── ProductListPage.jsx # 상품 목록
│   └── ErrorPage.jsx    # 에러 페이지
├── lib/                 # 라이브러리 설정
│   └── supabase.js      # Supabase 클라이언트
├── App.jsx              # 메인 앱 컴포넌트
├── main.jsx             # 앱 진입점
└── index.css            # Tailwind CSS 설정
```

## 페이지 구성

- **홈페이지** (`/`) - 프로젝트 소개 및 네비게이션
- **게시판** (`/posts`) - 게시물 목록 및 페이지네이션
- **글 작성** (`/write`) - 새 게시물 작성 폼
- **상품 목록** (`/products`) - 상품 카테고리별 조회

## 데이터베이스 스키마

### posts 테이블
```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  author VARCHAR NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```