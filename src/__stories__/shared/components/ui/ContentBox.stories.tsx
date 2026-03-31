import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContentBox } from "@/shared/components/ui/ContentBox";

const meta = {
  title: "shared/ui/ContentBox",
  component: ContentBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "배경 테마",
      table: {
        defaultValue: { summary: "light" },
      },
    },
  },
  args: {
    children: "콘텐츠 영역",
    theme: "light",
  },
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ThemeLight: Story = {
  args: {
    theme: "light",
  },
};

export const ThemeDark: Story = {
  args: {
    theme: "dark",
    children: <span className="text-white">콘텐츠 영역</span>,
  },
};

export const WithText: Story = {
  args: {
    children: "텍스트 콘텐츠가 들어있는 박스입니다.",
  },
};

export const WithMultipleChildren: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-2 text-sm">
        <span>항목 1</span>
        <span>항목 2</span>
        <span>항목 3</span>
      </div>
    ),
  },
};
