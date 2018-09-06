export interface Noti {
  id: number;
  name: string;
  desc: string;
  agent: string;
  unit: string;
  date: string;
}

export const NOTIFICATIONS: Noti = {
  id: 1,
  name: 'Policy Lapse',
  desc: 'Hillside Acres',
  agent: 'Lizette Arnolds',
  unit: 'Unit 240A',
  date: '7/25/2018'
};
