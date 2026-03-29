import { PX_PER_MINUTE, TIMES_PER_DAY } from "@/widgets/time-board/models/const";

function UnitTimeIn30Minutes({ time }: { time: string }) {
  return (
    <div
      style={{ height: PX_PER_MINUTE * 30 }}
      className="w-full flex justify-start items-center px-[12px] hover:bg-gray-200 transition-all duration-200"
    >
      <p className="text-[10px] font-light text-gray-600">{time}</p>
    </div>
  );
}

function TimeBoard() {
  return (
    <aside className="relative w-[300px] h-full overflow-y-auto no-scrollbar scroll-smooth divide-y divide-gray-300">
      {TIMES_PER_DAY.map((time) => (
        <UnitTimeIn30Minutes key={time} time={time} />
      ))}
    </aside>
  );
}

export default TimeBoard;
