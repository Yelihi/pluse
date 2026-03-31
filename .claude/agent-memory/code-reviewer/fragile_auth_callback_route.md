---
name: Fragile Area - Auth Callback Route
description: OAuth 콜백 라우트에서 브라우저/서버 클라이언트 혼용 위험 및 테스트 정합성
type: project
---

## 파일

`src/app/api/auth/callback/route.ts`

## 알려진 위험

1. **브라우저 클라이언트 혼용 버그**: feature/auth 브랜치에서 `createBrowserSupabaseClient`를 Route Handler에서 사용한 Blocker가 발견됨. 이 파일을 수정할 때마다 반드시 `createServerSupabaseClient` 사용 여부를 확인.

2. **테스트-구현 불일치 이력**: 리팩토링 커밋에서 `createServerSupabaseClient`가 index.ts에서 제거됐을 때 테스트의 mock 대상이 사라지며 CI가 깨진 선례 있음. supabase index.ts barrel export 변경 시 반드시 테스트 파일도 확인.

3. **리다이렉트 경로**: 기존 테스트는 `/session` 기대, 현재 구현은 `/` 리다이렉트. 경로 변경 시 테스트 동기화 필요.

## 테스트 위치

`src/__test__/app/auth/route.test.ts`

**Why:** feature/auth PR 리뷰(2026-03-30)에서 3개의 Blocker 중 2개가 이 파일과 관련됨.
**How to apply:** 이 파일 또는 supabase/index.ts 수정 시 테스트 파일을 반드시 함께 확인.
