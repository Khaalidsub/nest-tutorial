export class User {
    email: string;
    password: string;
    isApproved: boolean = false;
    constructor(e: string, pass: string) {
      this.email = e;
      this.password = pass;
    }
  }
  
  export const users = [
    new User('john@gmail.com', '1234'),
    new User('abdi@gmail.com', '1234'),
  ];
  