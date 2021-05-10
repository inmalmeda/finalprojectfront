import { InewUser } from "./inew-user.interface";

export class NewUser implements InewUser {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
  }
}
