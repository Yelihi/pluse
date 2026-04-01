import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FocusStateBadge from "@/shared/components/ui/FocusStateBadge";

const meta = {
  title: "shared/ui/FocusStateBadge",
  component: FocusStateBadge,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <section className="bg-black w-full h-100 flex justify-center items-center">
        <Story />
      </section>
    ),
  ],
} satisfies Meta<typeof FocusStateBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Focus: Story = {
  args: {
    state: "focus",
  },
};

export const Distracted: Story = {
  args: {
    state: "distracted",
  },
};

export const Absent: Story = {
  args: {
    state: "absent",
  },
};

export const Break: Story = {
  args: {
    state: "break",
  },
};

/** 4가지 state를 한눈에 비교 */
export const AllStates: Story = {
  args: {
    state: "focus",
  },
  render: () => (
    <div className="flex flex-col gap-[8px] w-full justify-center items-center">
      <FocusStateBadge state="focus" />
      <FocusStateBadge state="distracted" />
      <FocusStateBadge state="absent" />
      <FocusStateBadge state="break" />
    </div>
  ),
};
