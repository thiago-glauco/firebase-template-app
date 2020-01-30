import {User} from "./user";

export class RegisteredUser implements User {
  email: string;

  validated: boolean;

  name: string;

  mobile: string;

  uid?: string;

  password?: string;

  confirmPassword?: string;

  tel: number;


  //image: string;
}