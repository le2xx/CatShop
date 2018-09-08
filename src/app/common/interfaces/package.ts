export interface Package {
  id: number;
  name: string;
  composition: string;
  description: string;
  amount: number;
  present: { num: string, description: string };
  mass: string;
  disabled: boolean;
}
