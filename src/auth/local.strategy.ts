import {Strategy} from 'passport-local'
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService:AuthService){
        super({
            usernameField: 'email',
        })
    }

    validate(email:string,password:string){
        console.log(' in local strategy', email,password)
        const user = this.authService.validateUser(email,password)

        if (!user) throw new UnauthorizedException() 
        
        return user
    }
    
}