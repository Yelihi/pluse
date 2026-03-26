---
name: storybook-mcp-guideline
description: storybook mcp 활용 시 가이드라인. 사용자가 mcp 를 활용하여 storybook 파일을 생성할 떄, 해당 가이드라인을 준수할수 있도록 한다.
user-invocable: false
---

## Storybook MCP

이 프로젝트는 Storybook MCP 서버가 설정되어 있습니다. Storybook 실행 중(`npm run storybook`)일 때 Claude Code가 MCP 도구를 통해 컴포넌트/스토리 정보를 직접 조회할 수 있습니다.

### 스토리 작성 시 규칙

- import는 반드시 `@storybook/nextjs-vite` 사용 (`@storybook/nextjs` 아님)
- action args는 `storybook/test`의 `fn()` 사용
- 스토리 파일 위치: `src/__stories__/` (FSD 레이어 구조 미러링)

### MCP 활용 흐름

스토리 작성/수정 전에 항상 MCP 도구로 기존 패턴을 먼저 확인하세요:

1. `list-all-documentation` — 등록된 컴포넌트 목록 확인
2. `get-documentation` — 특정 컴포넌트의 props 확인
3. `get-storybook-story-instructions` — 스토리 컨벤션 확인
4. `run-story-tests` — 스토리 테스트 실행
