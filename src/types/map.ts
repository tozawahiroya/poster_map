export interface AreaData {
  id: number;
  name: string;
  color: string;
  total: number;
  done: number;
  progress: number;
}

export interface BoardPin {
  area_id: number;
  name: string;
  lat: number;
  long: number;
  status: number;
  note: string;
}

export interface ProgressData {
  [key: string]: string | number;
  total: string;
}

export interface VoteVenue {
  name: string;
  address: string;
  lat: string;
  long: string;
  period: string;
  time: string;
}

export const MAP_VIEWS = {
  BOARD: 'board',
  SUMMARY: 'summary',
  VOTE: 'vote'
} as const;

export type MapViewType = typeof MAP_VIEWS[keyof typeof MAP_VIEWS];
