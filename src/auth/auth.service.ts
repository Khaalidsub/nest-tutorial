import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService:UsersService){}

    validateUser(email:string, password:string){
        const user = this.usersService.getUserByEmail(email)

        if (!user ||  user.password != password) {
            return false
        }
        return user
    }
}
