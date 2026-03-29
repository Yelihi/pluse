import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Progress, ProgressLabel, ProgressValue } from "@/shared/components/ui/Progress";

const meta = {
  title: "shared/ui/Progress",
  component: Progress,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm px-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "진행률 (0~100)",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 40,
    "aria-label": "진행률",
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    "aria-label": "진행률",
  },
};

export const Half: Story = {
  args: {
    value: 50,
    "aria-label": "진행률",
  },
};

export const Full: Story = {
  args: {
    value: 100,
    "aria-label": "진행률",
  },
};

export const WithLabel: Story = {
  args: { value: 65 },
  render: () => (
    <Progress value={65}>
      <ProgressLabel>학습 진행률</ProgressLabel>
    </Progress>
  ),
};

export const WithLabelAndValue: Story = {
  args: { value: 72 },
  render: () => (
    <Progress value={72}>
      <ProgressLabel>오늘의 목표</ProgressLabel>
      <ProgressValue>{(value) => `${value}%`}</ProgressValue>
    </Progress>
  ),
};

export const Indeterminate: Story = {
  args: {
    value: null,
    "aria-label": "로딩 중",
  },
};
