export interface SignUp extends Login {
  name: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  age: number;
  surname: string;
  location: string;
}
