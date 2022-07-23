import { Values } from './values.interface';

export interface Question {
  number: number;
  question: string;
  type: 'input' | 'select';
  values: Values[];
  url: string;
  colorClass?: 'orange-q' | 'green-q' | 'blue' | 'mint' | 'beige' | 'pink';
}
