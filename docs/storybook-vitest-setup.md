# Storybook + Vitest (addon-vitest) 설정 가이드

Storybook MCP의 테스트 도구를 활성화하기 위한 `@storybook/addon-vitest` 설정 가이드입니다.
다른 프로젝트(예: `quickstart-custom-plate`)에도 동일하게 적용할 수 있습니다.

---

## 요구사항

- Storybook **10.3.0+** (이 가이드 기준: 10.3.3)
- Framework: `@storybook/nextjs-vite`

---

## 1. 의존성 설치

```bash
npm install --save-dev \
  @storybook/addon-vitest@10.3.3 \
  @storybook/addon-a11y@10.3.3 \
  vitest \
  @vitest/browser \
  @vitest/browser-playwright \
  @vitest/runner \
  playwright
```

Playwright Chromium 브라우저 설치:

```bash
npx playwright install chromium
```

---

## 2. `vitest.config.ts` 생성 (프로젝트 루트)

> **vitest v4 주의사항:**
>
> - `defineWorkspace` 대신 `defineConfig`의 `test.projects` 배열 사용
> - `browser.provider`는 문자열(`"playwright"`)이 아닌 팩토리 함수 (`playwright()`) 사용
> - `include` 옵션 불필요 (Storybook 설정의 `stories` glob으로 자동 탐색)

```ts
import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import path from "node:path";

export default defineConfig({
  test: {
    projects: [
      {
        plugins: [
          storybookTest({
            configDir: path.resolve(__dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src"),
          },
        },
      },
    ],
  },
});
```

---

## 3. `.storybook/vitest.setup.ts` 생성

Storybook 10.3+는 preview 어노테이션을 자동 적용합니다.
커스텀 전역 설정이 필요한 경우에만 이 파일에 추가하세요.

```ts
// Storybook 10.3+: preview annotations are applied automatically by addon-vitest
// Add custom global setup here if needed
```

---

## 4. `.storybook/main.ts` addons 수정

```ts
addons: [
  "@storybook/addon-docs",
  "@storybook/addon-mcp",
  "@storybook/addon-vitest",   // 추가
  "@storybook/addon-a11y",     // 추가 (선택)
],
```

---

## 5. `package.json` scripts 추가

```json
"test:storybook": "vitest --project storybook",
"test:storybook:watch": "vitest --project storybook --watch"
```

기존 `"test": "jest"` 스크립트는 그대로 유지됩니다. Jest와 Vitest는 독립적으로 동작합니다.

---

## 검증

```bash
# Storybook 스토리 테스트 실행
npm run test:storybook -- --run

# 기존 Jest 테스트 (영향 없는지 확인)
npm test
```

---

## Storybook MCP 연결 확인

1. `npm run storybook` 으로 Storybook 실행
2. localhost MCP 상태 페이지에서 test 연결 확인
3. Storybook UI 사이드바에서 Vitest 패널 확인
