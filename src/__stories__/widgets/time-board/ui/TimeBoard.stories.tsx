import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TimeBoard from "@/widgets/time-board/ui/TimeBoard";

const meta = {
  title: "widgets/TimeBoard",
  component: TimeBoard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[300px] h-[600px] border border-gray-200">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    a11y: {
      config: {
        rules: [
          {
            // aside 가 키보드 포커스를 받지 않는 것은 의도된 설계입니다.
            // 마우스/트랙패드 스크롤만 지원하는 컴포넌트입니다.
            id: "scrollable-region-focusable",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof TimeBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
