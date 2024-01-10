export interface SignUp extends Login {
  name: string;
}

export interface Login {
  email: string;
  password: string;
}
