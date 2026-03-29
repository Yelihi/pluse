import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BorderBox } from "@/shared/components/ui/BorderBox";

const meta = {
  title: "shared/ui/BorderBox",
  component: BorderBox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <div className="w-full h-[200px] flex justify-center items-center p-4">
        <p className="text-xs text-gray-500">콘텐츠 영역</p>
      </div>
    ),
  },
} satisfies Meta<typeof BorderBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BorderTop: Story = {
  args: {
    borderTop: true,
  },
};

export const BorderBottom: Story = {
  args: {
    borderBottom: true,
  },
};

export const BorderLeft: Story = {
  args: {
    borderLeft: true,
  },
};

export const BorderRight: Story = {
  args: {
    borderRight: true,
  },
};

export const AllBorders: Story = {
  args: {
    borderTop: true,
    borderBottom: true,
    borderLeft: true,
    borderRight: true,
  },
};

/**
 * 여러 BorderBox를 조합해 격자 레이아웃을 구성할 때,
 * 인접한 셀 중 한쪽에만 border를 지정하면 테두리 겹침 없이 깔끔하게 표현됩니다.
 *
 * 규칙: 공유 경계선은 왼쪽/위쪽 셀만 border를 가짐
 * - 좌우 인접: 왼쪽 셀에만 borderRight
 * - 상하 인접: 위쪽 셀에만 borderBottom
 */
export const Combined: Story = {
  render: () => (
    <div className="w-full border border-gray-200 flex flex-row">
      {/* 왼쪽 사이드바 — borderRight 하나로 우측 열과 경계 공유 */}
      <BorderBox borderRight className="w-[140px] shrink-0 flex-col items-start gap-3">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-[11px] font-medium text-gray-600">활동 기록</p>
          {["04:00", "04:30", "05:00", "05:30", "06:00"].map((time) => (
            <span key={time} className="text-[11px] text-gray-600">
              {time}
            </span>
          ))}
        </div>
      </BorderBox>

      {/* 중앙 영역 — 좌우 border 없음 (인접 셀이 담당) */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* 중앙 상단 — borderBottom 하나로 하단 행과 경계 공유 */}
        <BorderBox borderBottom className="flex-col items-start gap-1">
          <p className="text-[11px] text-gray-600">오늘 시간</p>
          <p className="text-[22px] font-semibold text-black leading-none">09:58</p>
        </BorderBox>

        {/* 중앙 하단 — 상단 border 없음 (위 셀의 borderBottom이 담당) */}
        <BorderBox className="flex-col items-start gap-1">
          <p className="text-[11px] font-medium text-gray-600">진행 세션 리스트</p>
          <p className="text-[11px] text-gray-600">진행 중인 세션이 없습니다</p>
        </BorderBox>
      </div>

      {/* 오른쪽 사이드바 — borderLeft 하나로 중앙 열과 경계 공유 */}
      <BorderBox borderLeft className="w-[160px] shrink-0 flex-col items-start gap-3">
        <p className="text-[11px] font-medium text-gray-600">목표 설정</p>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <span className="text-[11px] text-gray-600">목표시간</span>
            <span className="text-[11px] text-black">02:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[11px] text-gray-600">목표집중도</span>
            <span className="text-[11px] text-black">70%</span>
          </div>
        </div>
      </BorderBox>
    </div>
  ),
};
