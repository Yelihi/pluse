import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconContainer } from "@/shared/components/ui/IconContainer";
import { Bell } from "@/shared/components/svg/Bell";
import { Camera } from "@/shared/components/svg/Camera";
import { HalfMoon } from "@/shared/components/svg/HalfMoon";
import { Locked } from "@/shared/components/svg/Locked";

const meta = {
  title: "shared/ui/IconContainer",
  component: IconContainer,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "컨테이너 크기",
      table: {
        defaultValue: { summary: "lg" },
      },
    },
  },
  args: {
    children: <Bell />,
  },
} satisfies Meta<typeof IconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SizeSm: Story = {
  args: {
    size: "sm",
  },
};

export const SizeMd: Story = {
  args: {
    size: "md",
  },
};

export const SizeLg: Story = {
  args: {
    size: "lg",
  },
};

export const WithBell: Story = {
  args: {
    children: <Bell />,
  },
};

export const WithCamera: Story = {
  args: {
    children: <Camera />,
  },
};

export const WithHalfMoon: Story = {
  args: {
    children: <HalfMoon />,
  },
};

export const WithLocked: Story = {
  args: {
    children: <Locked />,
  },
};
