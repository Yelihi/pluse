import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TimerBadge from "@/shared/components/ui/TimerBadge";

const meta = {
  title: "shared/ui/TimerBadge",
  component: TimerBadge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TimerBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 고정된 시간 값 확인용 */
export const Default: Story = {
  args: {
    time: 0,
  },
};

export const OneHour: Story = {
  args: {
    time: 3600,
  },
};

export const WithTime: Story = {
  args: {
    time: 3725, // 01:02:05
  },
};

/** 매 초마다 new Date() - startDate 를 통해 경과 시간을 props로 전달 */
function LiveTimerWrapper() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const startDate = new Date();

    const id = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now.getTime() - startDate.getTime()) / 1000);
      setTime(elapsed);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <TimerBadge time={time} />;
}

export const Live: Story = {
  args: {
    time: 0,
  },
  render: () => <LiveTimerWrapper />,
};
