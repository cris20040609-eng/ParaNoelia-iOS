
export enum AppScreen {
  LANDING = 'LANDING',
  KEYPAD = 'KEYPAD',
  SUCCESS = 'SUCCESS',
  GIFT = 'GIFT'
}

export interface SpecialDate {
  id: string; // Format DDMMYYYY
  title: string;
  message: string;
  formatted: string;
}

export interface HeartParticle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}
