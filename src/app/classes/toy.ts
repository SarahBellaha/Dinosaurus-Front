import { User } from '../Interfaces/User';

export class ToyClass {
  id: string = '';
  name: string = '';
  description: string = '';
  picture?: string = '';
  available?: boolean = true;
  user?: User;
}