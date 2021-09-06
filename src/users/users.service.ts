import {Injectable, Inject, forwardRef, Logger} from '@nestjs/common'
 import { User, users } from './entity/user.entity';
import {CreateUserInput} from './dto/create-user.input'
import {UpdateUserAdminInput, UpdateUserInput} from './dto/update-user.input'
import { PostsService } from '../posts/posts.service';
 @Injectable()
export class UsersService {

    private logger = new Logger(UsersService.name)
    constructor(  @Inject(forwardRef(()=>PostsService)) private postsService:PostsService){}
  getUsers() {
    return users.map((user,index) => {
      return {
        ...user,
        posts: this.postsService.findAllByAuthorId(index) || []
      }
    });
  }
  getUser(id: number) {
    const result = users.find((user,index)=>index==id)
    if(!result) this.logger.warn(`User has not been found : id : ${id}`)
    return users[id];
  }

  getUserByEmail(email:string){
    return users.find(user=>user.email === email)
  }

  createUser(data: CreateUserInput) {
    const newUser = new User(data.email, data.password);
    this.logger.log(`A new user has been created. user : ${newUser.email}`)
    users.push(newUser);

    return newUser;
  }

  updateUser(id:number, data:UpdateUserInput | UpdateUserAdminInput){
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
