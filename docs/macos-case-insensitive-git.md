# macOS 대소문자 파일명 이슈

## 왜 발생하는가

### macOS 파일시스템 특성

macOS의 기본 파일시스템(APFS, HFS+)은 **대소문자 구분 없음(case-insensitive)** 이다.
`Input.tsx`와 `input.tsx`를 동일한 파일로 취급하기 때문에, 파일명을 소문자에서 대문자로 바꿔도 git이 변경을 감지하지 못한다.

```bash
# macOS에서는 이 두 명령이 같은 파일을 가리킨다
cat src/shared/components/ui/Input.tsx
cat src/shared/components/ui/input.tsx  # 같은 파일
```

반면 Linux(CI 서버)는 **대소문자 구분(case-sensitive)** 파일시스템을 사용하므로, git에 `input.tsx`로 저장된 파일을 `Input.tsx`로 임포트하면 "파일 없음" 에러가 발생한다.

### shadcn과의 연관

shadcn CLI는 컴포넌트를 **소문자**로 생성한다.

```bash
npx shadcn add input
# → src/components/ui/input.tsx 생성 (소문자)
```

이후 프로젝트 컨벤션에 맞춰 임포트 경로를 `Input`(대문자)으로 수정하면, 로컬(macOS)에서는 정상 동작하지만 git에는 여전히 `input.tsx`로 추적된다.

```ts
// 수정 전
import { Input } from "@/shared/components/ui/input";

// 수정 후 (로컬에서는 동작하지만 CI에서 TS2307 에러 발생)
import { Input } from "@/shared/components/ui/Input";
```

---

## 해결 방법

### 신규 파일 생성 시: 처음부터 올바른 이름으로 저장

shadcn 설치 후 바로 파일명을 변경한다.

```bash
npx shadcn add input

# git mv로 즉시 대소문자 변경 (중간 임시명 필수)
git mv src/shared/components/ui/input.tsx src/shared/components/ui/Input_temp.tsx
git mv src/shared/components/ui/Input_temp.tsx src/shared/components/ui/Input.tsx
```

> **중간 임시명이 필요한 이유**: macOS에서 `git mv input.tsx Input.tsx`를 직접 실행하면
> 대소문자만 다른 파일로 인식하지 못해 rename이 무시된다.

### 이미 잘못 커밋된 파일 수정 시

```bash
git mv src/shared/components/ui/input.tsx src/shared/components/ui/Input_temp.tsx
git mv src/shared/components/ui/Input_temp.tsx src/shared/components/ui/Input.tsx
git commit -m "fix: Input.tsx 파일명 대소문자 수정"
```

### git 설정으로 대소문자 감지 활성화 (프로젝트 단위)

```bash
git config core.ignorecase false
```

이 설정을 활성화하면 macOS에서도 git이 대소문자 변경을 감지한다.
단, 기존에 소문자로 추적 중인 파일은 여전히 `git mv`로 명시적으로 rename해야 한다.

---

## CI 에러 예시

```
error TS2307: Cannot find module '@/shared/components/ui/Input'
or its corresponding type declarations.
```

이 에러가 로컬에서는 통과하고 CI(Linux)에서만 실패한다면 **파일명 대소문자 불일치**를 먼저 의심한다.

```bash
# git이 어떤 이름으로 파일을 추적하는지 확인
git ls-files src/shared/components/ui/ | grep -i input
# → input.tsx (소문자로 추적 중이면 문제)
```
