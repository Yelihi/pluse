import { PX_PER_MINUTE, TIMES_PER_DAY } from "@/widgets/time-board/models/const";

import type { TimeBoardState } from "@/widgets/time-board/models/interface";

/** client */
import TimeBoardRealTimeContainer from "@/widgets/time-board/ui/TimeBoardRealTimeContainer";
import CurrentTime from "@/widgets/time-board/ui/CurrentTime";
import SessionBoundary from "@/widgets/time-board/ui/SessionBoundary";

function UnitTimeIn30Minutes({ time }: { time: string }) {
  return (
    <div
      style={{ height: PX_PER_MINUTE * 30 }}
      className="w-full flex justify-start items-center px-[12px] hover:bg-gray-200 transition-all duration-200"
    >
      <p className="text-[15px] font-light text-gray-600">{time}</p>
    </div>
  );
}

/**
 * TODO: 추후에 sessions 를 어떻게 전달받을지 논의 후 수정할 예정
 *
 */
function TimeBoard({ endedSessions, inProgressSession }: TimeBoardState) {
  return (
    <aside className="relative w-[300px] h-full overflow-y-auto no-scrollbar scroll-smooth divide-y divide-gray-300">
      <TimeBoardRealTimeContainer>
        <CurrentTime />
        {endedSessions.map((session) => (
          <SessionBoundary key={session.id} {...session} />
        ))}
        {inProgressSession && <SessionBoundary key={inProgressSession.id} {...inProgressSession} />}
      </TimeBoardRealTimeContainer>
      {TIMES_PER_DAY.map((time) => (
        <UnitTimeIn30Minutes key={time} time={time} />
      ))}
    </aside>
  );
}

export default TimeBoard;
