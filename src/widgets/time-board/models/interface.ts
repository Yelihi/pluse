export interface SessionSegment {
  id: string;
  type: "focus" | "distracted" | "absent" | "break";
  startTime: Date;
  endTime: Date;
}

export interface Session {
  id: string;
  startTime: Date;
  endTime: Date;
  segments: SessionSegment[];
}

export interface TimeBoardState {
  today: Date;
  sessions: Session[];
}
