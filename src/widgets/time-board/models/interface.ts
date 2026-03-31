export interface SessionSegmentProps {
  id: string;
  type: "focus" | "distracted" | "absent" | "break";
  startTime: Date;
  duration: number;
}

export interface Session {
  id: string;
  startTime: Date;
  endTime?: Date;
  segments: SessionSegmentProps[];
}

export interface TimeBoardState {
  today: Date;
  endedSessions: Session[];
  inProgressSession?: Session;
}
