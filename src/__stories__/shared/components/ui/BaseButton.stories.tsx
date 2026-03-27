import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { BaseButton } from "@/shared/components/ui/BaseButton";
import { Video } from "@/shared/components/svg";

const meta = {
  title: "shared/ui/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["black", "white"],
      description: "버튼 색상 테마",
      table: {
        defaultValue: { summary: "white" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "버튼 크기",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    selected: {
      control: "boolean",
      description: "선택 상태 (true일 때 cursor-none 적용)",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: "text",
      description: "버튼 텍스트 (children 대신 사용 가능)",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    pending: {
      control: "boolean",
      description: "로딩 상태",
    },
    onClick: {
      action: "clicked",
      description: "클릭 이벤트 핸들러",
    },
  },
  args: {
    onClick: fn(),
    value: "버튼",
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ThemeBlack: Story = {
  args: {
    theme: "black",
    value: "Black 테마",
  },
};

export const ThemeWhite: Story = {
  args: {
    theme: "white",
    value: "White 테마",
  },
};

export const SizeSm: Story = {
  args: {
    size: "sm",
    value: "Small",
  },
};

export const SizeMd: Story = {
  args: {
    size: "md",
    value: "Medium",
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    value: "선택됨",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "비활성화",
  },
};

export const WithChildren: Story = {
  args: {
    value: "카메라 켜기",
    children: <Video />,
    size: "sm",
  },
};

export const Pending: Story = {
  args: {
    pending: true,
  },
};
