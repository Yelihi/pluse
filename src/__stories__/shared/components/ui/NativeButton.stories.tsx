import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { NativeButton } from "@/shared/components/ui/NativeButton";
import { Google } from "@/shared/components/svg/Google";
import { KaKao } from "@/shared/components/svg/KaKao";

const meta = {
  title: "shared/ui/NativeButton",
  component: NativeButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "fill"],
    },
    oauth: {
      control: "select",
      options: ["kakao"],
    },
  },
  args: {
    onClick: fn(),
    value: "버튼",
  },
} satisfies Meta<typeof NativeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithGoogleIcon: Story = {
  args: {
    value: "Google로 계속하기",
    variant: "default",
    children: <Google />,
  },
};

export const WithKakaoIcon: Story = {
  args: {
    oauth: "kakao",
    value: "카카오로 계속하기",
    variant: "fill",
    children: <KaKao />,
  },
};
