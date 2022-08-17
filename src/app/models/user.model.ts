export class User {
  _id: string;
  f_name: string;
  l_name: string;
  email: string;
  password: string;

  constructor(
    _id?: string,
    f_name?: string,
    l_name?: string,
    email?: string,
    password?: string,
  ) {
    this._id = _id!;
    this.f_name = f_name!;
    this.email = email!;
    this.password = password!;
    this.l_name = l_name!;
  }
}
