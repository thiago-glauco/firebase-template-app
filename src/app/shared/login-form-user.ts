import {User} from "./user";

export class LoginFormUser implements User {
  email: string;

  password: string;

  confirmPassword?: string;

  //image: string;
}