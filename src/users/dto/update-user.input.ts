import {IsOptional,IsEmail,MinLength} from 'class-validator'
export class UpdateUserInput{
    @IsOptional()
    @IsEmail()
    email?:string
    @IsOptional()
    @MinLength(4)
    password?:string

}

export class UpdateUserAdminInput{
    @IsOptional()
    @IsEmail()
    email?:string
    @IsOptional()
    @MinLength(4)
    password?:string
    @IsOptional()
    isApproved?:boolean
}
