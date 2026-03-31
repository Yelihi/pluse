---
name: FSD Layer Architecture
description: 이 프로젝트의 FSD 레이어 구조, 의존성 방향, 각 레이어 책임
type: project
---

## 레이어 의존성 방향

```
shared ← entities ← features ← widgets ← views ← app
```

## 레이어별 책임

- **shared**: 재사용 가능한 UI 컴포넌트(`src/shared/components/`), 유틸, 훅, 외부 라이브러리 래퍼(`src/shared/lib/`). 비즈니스 로직 없음.
- **entities**: 도메인 DTO, enum, 레포지터리. 현재 프로젝트에서 명시적 entities 레이어는 확인되지 않음(2026-03-30 기준).
- **features**: 사용자 액션, 인증 플로우, 쿼리/뮤테이션 훅. `src/features/auth/`가 현재 활성 슬라이스.
- **widgets**: 복수 페이지에서 재사용되는 복합 UI. `src/widgets/time-board/` 존재.
- **views**: 라우트 스코프 페이지 컴포넌트. `src/views/auth/`, `src/views/home/` 존재.
- **app**: Next.js App Router 진입점. `src/app/`.

## 확인된 패턴

- views에서 features import: `src/views/auth/ui/Auth.tsx` → `src/features/auth` (정상)
- app/layout에서 features import: `src/app/layout.tsx` → `src/features/auth` (허용. app은 최상위 레이어)
- features 내부 모듈 참조는 절대경로(`@/features/auth/...`) 사용

## barrel export 위치

각 레이어 슬라이스의 public API는 `index.ts`에서 export. 슬라이스 내부 구현은 외부에서 직접 import하지 않는 것이 원칙.

**Why:** feature/auth 리뷰(2026-03-30)에서 레이어 의존성 전반 확인.
**How to apply:** 새 파일의 import 방향이 위 의존성 방향을 역행하면 Blocker로 리포트.
