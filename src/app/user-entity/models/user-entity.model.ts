export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}
export class UserModel implements IUser {
  id: number = 1;
  firstName: string = '';
  lastName: string = '';

}
