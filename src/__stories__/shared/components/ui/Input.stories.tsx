import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/shared/components/ui/input";

const meta = {
  title: "shared/ui/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "file"],
      description: "input 타입",
      table: {
        defaultValue: { summary: "text" },
      },
    },
    placeholder: {
      control: "text",
      description: "플레이스홀더 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    "aria-invalid": {
      control: "boolean",
      description: "유효하지 않은 입력 상태",
    },
  },
  args: {
    type: "text",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "기본 입력",
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "입력하세요",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "입력된 값",
    "aria-label": "입력된 값",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "비활성화된 입력",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    defaultValue: "잘못된 값",
    "aria-label": "잘못된 값",
    "aria-invalid": true,
  },
};

export const TypeEmail: Story = {
  args: {
    type: "email",
    placeholder: "example@email.com",
  },
};

export const TypePassword: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
};

export const TypeNumber: Story = {
  args: {
    type: "number",
    placeholder: "숫자를 입력하세요",
  },
};

export const TypeFile: Story = {
  args: {
    type: "file",
    "aria-label": "파일 선택",
  },
};
