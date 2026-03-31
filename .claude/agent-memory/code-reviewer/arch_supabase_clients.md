---
name: Supabase Client Split Pattern
description: 이 프로젝트의 Supabase 클라이언트 분리 패턴과 각 클라이언트의 올바른 사용처
type: project
---

## 클라이언트 구조

- `src/shared/lib/supabase/client.ts` — `createBrowserSupabaseClient()`: `@supabase/ssr`의 `createBrowserClient` 래핑. localStorage 기반. 클라이언트 컴포넌트 및 이벤트 핸들러에서만 사용.
- `src/shared/lib/supabase/server.ts` — `createServerSupabaseClient()`: `@supabase/ssr`의 `createServerClient` 래핑. `next/headers` cookies() 기반 async 함수. Server Component, Route Handler, Server Action에서 사용.
- `src/shared/lib/supabase/middleware.ts` — `updateSession()`: Middleware 전용. `NextRequest` 기반 쿠키 처리.

## index.ts 공개 API (feature/auth 기준)

현재 `createServerSupabaseClient`가 index.ts에서 export되지 않음 (2026-03-30 기준). Route Handler에서 필요하므로 추가되어야 함.

## 핵심 규칙

- OAuth PKCE 코드 교환(`exchangeCodeForSession`)은 반드시 `createServerSupabaseClient`에서 수행. 쿠키에 세션을 설정해야 하기 때문.
- 클라이언트 컴포넌트에서의 인증 상태 감지는 `createBrowserSupabaseClient` + `onAuthStateChange` 사용.
- Route Handler에서 `createBrowserSupabaseClient` 사용은 security blocker.

**Why:** feature/auth PR 리뷰(2026-03-30)에서 콜백 라우트가 브라우저 클라이언트를 사용해 세션 쿠키 설정이 불가한 Blocker 발견.
**How to apply:** Route Handler 또는 Server Component에서 supabase 클라이언트 사용 시, 반드시 server.ts 함수 사용 여부 확인.
