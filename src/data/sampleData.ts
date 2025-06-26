import { AreaData, ProgressData, VoteVenue } from '../types/map';

export const sampleAreaData: AreaData[] = [
  {
    id: 1,
    name: '千代田区',
    color: '#ff0000',
    total: 100,
    done: 85,
    progress: 85
  },
  {
    id: 2,
    name: '中央区',
    color: '#00ff00',
    total: 80,
    done: 72,
    progress: 90
  },
  {
    id: 3,
    name: '港区',
    color: '#0000ff',
    total: 120,
    done: 60,
    progress: 50
  }
];

export const sampleProgressData = {
  total: 300,
  completed: 217,
  percentage: 72.3
};

export const sampleVoteVenues: VoteVenue[] = [
  {
    name: '千代田区役所',
    address: '千代田区九段南1-2-1',
    lat: '35.6939726',
    long: '139.7536284',
    period: '6/21～7/6',
    time: '8:30～20:00'
  },
  {
    name: '中央区役所',
    address: '中央区築地1-1-1',
    lat: '35.6717',
    long: '139.7717',
    period: '6/21～7/6',
    time: '8:30～20:00'
  }
];
