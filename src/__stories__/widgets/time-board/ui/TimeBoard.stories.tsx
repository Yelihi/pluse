import { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TimeBoard from "@/widgets/time-board/ui/TimeBoard";
import type { Session } from "@/widgets/time-board/models/interface";

function d(h: number, m: number, s = 0): Date {
  return new Date(2026, 2, 30, h, m, s);
}

const dummyEndedSessions: Session[] = [
  {
    id: "session-1",
    startTime: d(16, 30),
    endTime: d(16, 49),
    segments: [
      { id: "seg-1", type: "focus", startTime: d(16, 30, 0), duration: 120 },
      { id: "seg-2", type: "distracted", startTime: d(16, 32, 0), duration: 60 },
      { id: "seg-3", type: "focus", startTime: d(16, 33, 0), duration: 180 },
      { id: "seg-4", type: "break", startTime: d(16, 36, 0), duration: 300 },
      { id: "seg-5", type: "focus", startTime: d(16, 41, 0), duration: 240 },
      { id: "seg-6", type: "distracted", startTime: d(16, 45, 0), duration: 90 },
      { id: "seg-7", type: "focus", startTime: d(16, 46, 30), duration: 150 },
    ],
  },
];

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

export const Default: Story = {
  args: {
    today: d(9, 0),
    endedSessions: [],
  },
};

/** inProgressSession 실시간 타이머 시뮬레이션 래퍼
 * - 0~60s: focus 세그먼트 duration 증가
 * - 60~120s: focus(60s 고정) + distracted duration 증가
 * - 120s 이후: 타이머 정지
 */
function InProgressWrapper() {
  const startTime = useRef(new Date());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed((prev) => {
        if (prev >= 120) {
          clearInterval(id);
          return 120;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const focusDuration = Math.min(elapsed, 60);
  const distractedDuration = Math.max(0, elapsed - 60);
  const distractedStart = new Date(startTime.current.getTime() + 60 * 1000);

  const segments: Session["segments"] = [
    {
      id: "seg-ip-1",
      type: "focus",
      startTime: startTime.current,
      duration: focusDuration,
    },
    ...(elapsed > 60
      ? [
          {
            id: "seg-ip-2",
            type: "distracted" as const,
            startTime: distractedStart,
            duration: distractedDuration,
          },
        ]
      : []),
  ];

  const inProgressSession: Session = {
    id: "session-ip",
    startTime: startTime.current,
    segments,
  };

  return (
    <TimeBoard
      today={startTime.current}
      endedSessions={dummyEndedSessions}
      inProgressSession={inProgressSession}
    />
  );
}

export const InProgress: Story = {
  args: {
    today: d(9, 0),
    endedSessions: [],
  },
  render: () => <InProgressWrapper />,
};

export const WithEndedSessions: Story = {
  args: {
    today: d(16, 49),
    endedSessions: dummyEndedSessions,
  },
};
