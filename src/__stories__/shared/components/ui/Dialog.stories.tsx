import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/Dialog";
import { BaseButton } from "@/shared/components/ui";
import { Video } from "@/shared/components/svg";

const meta = {
  title: "shared/ui/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <BaseButton>open</BaseButton>
      </DialogTrigger>
      <DialogContent aria-label="기본 다이얼로그">
        <div className="mt-[12px]">
          <p>
            매일 아침 눈을 뜰 때마다 오늘 하루를 어떻게 보낼지 생각해보세요. 작은 습관 하나가 삶의
            방향을 바꿀 수 있습니다. 꾸준함이 결국 큰 변화를 만들어냅니다.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const WithTitleAndDescription: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <BaseButton>
          <Video />
          open
        </BaseButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>오늘의 기록</DialogTitle>
          <DialogDescription>
            하루를 마무리하며 오늘의 생각과 감정을 간단히 남겨보세요.
          </DialogDescription>
        </DialogHeader>
        <p>
          오늘 하루도 수고 많으셨습니다. 바쁜 일상 속에서도 잠깐 멈춰 자신을 돌아보는 시간을 갖는
          것은 매우 중요합니다. 작은 성취라도 스스로를 칭찬해주세요. 내일은 오늘보다 조금 더 나은
          하루가 될 것입니다.
        </p>
      </DialogContent>
    </Dialog>
  ),
};

export const WithFooterClose: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <BaseButton>
          <Video />
          open
        </BaseButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>알림 설정 안내</DialogTitle>
          <DialogDescription>
            알림을 활성화하면 중요한 일정과 목표 달성 현황을 실시간으로 받아볼 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <p>
          알림 설정을 통해 매일 목표한 시간에 리마인더를 받을 수 있습니다. 집중 시간, 휴식 시간,
          일일 마감 알림 등 원하는 항목을 자유롭게 선택해 나만의 루틴을 만들어보세요. 언제든지
          설정에서 변경할 수 있습니다.
        </p>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <BaseButton>
          <Video />
          open
        </BaseButton>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>진행 중인 작업</DialogTitle>
          <DialogDescription>
            현재 데이터를 저장하고 있습니다. 잠시만 기다려주세요.
          </DialogDescription>
        </DialogHeader>
        <p>
          작업이 완료되면 자동으로 닫힙니다. 이 창을 닫으면 진행 중인 작업이 중단될 수 있으니 잠시
          기다려주시기 바랍니다.
        </p>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
};
