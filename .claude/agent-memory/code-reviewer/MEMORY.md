# Code Reviewer Memory Index

## Project Architecture

- [arch_fsd_layers.md](./arch_fsd_layers.md) — FSD 레이어 구조 및 의존성 방향 (shared ← entities ← features ← widgets ← views)
- [arch_supabase_clients.md](./arch_supabase_clients.md) — Supabase 클라이언트 분리 패턴 및 올바른 사용처

## Known Fragile Areas

- [fragile_auth_callback_route.md](./fragile_auth_callback_route.md) — OAuth 콜백 라우트: 브라우저/서버 클라이언트 혼용 위험
