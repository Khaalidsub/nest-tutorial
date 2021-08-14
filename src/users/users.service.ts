import {Injectable} from '@nestjs/common'
 import { User, users } from './entity/user.entity';


 @Injectable()
export class UsersService {
  getUsers() {
    return users;
  }
  getUser(id: number) {
    return users[id];
  }

  createUser(data: any) {
    const newUser = new User(data.email, data.password);
    users.push(newUser);
    return newUser;
  }

  updateUser(id:number, data){
      const user = users[id]
      const updatedUser = {...user,...data}
      users[id] = updatedUser;
      return updatedUser
  }
  editUser(id: number, data: any) {
    const user = users[id];
    user.email = data.email;
    user.password = data.password;
    users[id] = user;
    return user;
  }

  deleteUser(id: number) {
    return users.splice(id, 1);
  }
}
