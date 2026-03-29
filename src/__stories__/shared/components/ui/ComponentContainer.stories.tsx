import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  ComponentContainer,
  ComponentContainerHeader,
  ComponentContainerIconTitle,
} from "@/shared/components/ui/ComponentContainer";
import { Bell } from "@/shared/components/svg/Bell";

const meta = {
  title: "shared/ui/ComponentContainer",
  component: ComponentContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ComponentContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ComponentContainer>
      <p className="text-xs text-gray-500">컨테이너 내부 콘텐츠 영역입니다.</p>
    </ComponentContainer>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <ComponentContainer>
      <ComponentContainerHeader title="알림 설정">
        <p className="text-xs text-gray-500">알림 수신 여부와 알림 방식을 설정할 수 있습니다.</p>
      </ComponentContainerHeader>
      <p className="text-xs text-gray-500">컨테이너 내부 콘텐츠 영역입니다.</p>
    </ComponentContainer>
  ),
};

export const WithIconTitle: Story = {
  render: () => (
    <ComponentContainer>
      <ComponentContainerIconTitle title="알림">
        <Bell />
      </ComponentContainerIconTitle>
      <p className="text-xs text-gray-500">컨테이너 내부 콘텐츠 영역입니다.</p>
    </ComponentContainer>
  ),
};
