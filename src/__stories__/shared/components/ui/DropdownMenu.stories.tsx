import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListIcon } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/shared/components/ui/DropdownMenu";

const HamburgerTrigger = () => (
  <DropdownMenuTrigger className="flex items-center justify-center size-8 rounded-none border border-input bg-transparent hover:bg-accent transition-colors outline-none focus-visible:ring-1 focus-visible:ring-ring/50">
    <ListIcon className="size-4" />
    <span className="sr-only">메뉴 열기</span>
  </DropdownMenuTrigger>
);

const meta = {
  title: "shared/ui/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex items-start justify-center w-full min-h-[260px] pt-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <HamburgerTrigger />
      <DropdownMenuContent>
        <DropdownMenuItem>프로필</DropdownMenuItem>
        <DropdownMenuItem>설정</DropdownMenuItem>
        <DropdownMenuItem>알림</DropdownMenuItem>
        <DropdownMenuItem>로그아웃</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithGroupAndLabel: Story = {
  render: () => (
    <DropdownMenu>
      <HamburgerTrigger />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>내 계정</DropdownMenuLabel>
          <DropdownMenuItem>프로필</DropdownMenuItem>
          <DropdownMenuItem>설정</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>지원</DropdownMenuLabel>
          <DropdownMenuItem>도움말</DropdownMenuItem>
          <DropdownMenuItem>문의하기</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithShortcut: Story = {
  render: () => (
    <DropdownMenu>
      <HamburgerTrigger />
      <DropdownMenuContent>
        <DropdownMenuItem>
          새 파일
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          저장
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          복사
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          붙여넣기
          <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => (
    <DropdownMenu>
      <HamburgerTrigger />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>화면 표시</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>사이드바</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>툴바</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>상태바</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithRadioItems: Story = {
  render: () => (
    <DropdownMenu>
      <HamburgerTrigger />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>테마</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="light">
            <DropdownMenuRadioItem value="light">라이트</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">다크</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">시스템 기본</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <HamburgerTrigger />
      <DropdownMenuContent>
        <DropdownMenuItem>프로필</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>더보기</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>공지사항</DropdownMenuItem>
            <DropdownMenuItem>업데이트 내역</DropdownMenuItem>
            <DropdownMenuItem>이용약관</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">계정 삭제</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithDestructiveItem: Story = {
  render: () => (
    <DropdownMenu>
      <HamburgerTrigger />
      <DropdownMenuContent>
        <DropdownMenuItem>프로필 수정</DropdownMenuItem>
        <DropdownMenuItem>비밀번호 변경</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">로그아웃</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">계정 삭제</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
