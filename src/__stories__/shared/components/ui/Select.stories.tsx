import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/Select";

const meta = {
  title: "shared/ui/Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full flex justify-center items-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-full max-w-40" aria-label="과일 선택">
        <SelectValue placeholder="과일을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="사과">사과</SelectItem>
        <SelectItem value="바나나">바나나</SelectItem>
        <SelectItem value="오렌지">오렌지</SelectItem>
        <SelectItem value="포도">포도</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const SizeDefault: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-full max-w-40" size="default" aria-label="크기 기본">
        <SelectValue placeholder="기본 크기 (h-8)" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">옵션 1</SelectItem>
        <SelectItem value="option2">옵션 2</SelectItem>
        <SelectItem value="option3">옵션 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const SizeSm: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-full max-w-40" size="sm" aria-label="크기 소">
        <SelectValue placeholder="소형 크기 (h-7)" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">옵션 1</SelectItem>
        <SelectItem value="option2">옵션 2</SelectItem>
        <SelectItem value="option3">옵션 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue="banana">
      <SelectTrigger className="w-full max-w-40" aria-label="과일 선택">
        <SelectValue placeholder="과일을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">사과</SelectItem>
        <SelectItem value="banana">바나나</SelectItem>
        <SelectItem value="orange">오렌지</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-full max-w-40" aria-label="비활성화 선택">
        <SelectValue placeholder="비활성화 상태" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">옵션 1</SelectItem>
        <SelectItem value="option2">옵션 2</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-full max-w-40" aria-label="항목 일부 비활성화">
        <SelectValue placeholder="항목을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="available1">선택 가능 항목 1</SelectItem>
        <SelectItem value="disabled" disabled>
          선택 불가 항목
        </SelectItem>
        <SelectItem value="available2">선택 가능 항목 2</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithGroupAndLabel: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-full max-w-40" aria-label="카테고리별 선택">
        <SelectValue placeholder="카테고리를 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>과일</SelectLabel>
          <SelectItem value="사과">사과</SelectItem>
          <SelectItem value="바나나">바나나</SelectItem>
          <SelectItem value="오랜지">오렌지</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>채소</SelectLabel>
          <SelectItem value="당근">당근</SelectItem>
          <SelectItem value="브로콜리">브로콜리</SelectItem>
          <SelectItem value="시금치">시금치</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-full max-w-40" aria-label="구분선 포함 선택">
        <SelectValue placeholder="옵션을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="recent1">최근 항목 1</SelectItem>
        <SelectItem value="recent2">최근 항목 2</SelectItem>
        <SelectSeparator />
        <SelectItem value="all1">전체 항목 1</SelectItem>
        <SelectItem value="all2">전체 항목 2</SelectItem>
        <SelectItem value="all3">전체 항목 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const ManyOptions: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-full max-w-40" aria-label="많은 옵션 선택">
        <SelectValue placeholder="항목을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 20 }, (_, i) => (
          <SelectItem key={i + 1} value={`option${i + 1}`}>
            옵션 {i + 1}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};
