"use client";

/**
 * 매 초를 전달받아 렌더링 해야하기에 "use client"로 설정
 * @param time 초단위 시간
 */
function TimerBadge({ time }: { time: number }) {
  const convertSecondsToBadgeText = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const textHours = hours < 10 ? `0${hours}` : `${hours}`;
    const textMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const textSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${textHours}:${textMinutes}:${textSeconds}`;
  };

  const badgeText = convertSecondsToBadgeText(time);

  return (
    <div className="flex justify-start items-center px-[12px] h-[28px] rounded-[4px] gap-[8px] bg-red-500 w-[94px]">
      <div className="size-[6px] bg-white rounded-full animate-pulse"></div>
      <p className="text-[12px] text-white font-normal animate-pulse">{badgeText}</p>
    </div>
  );
}

export default TimerBadge;
