import {IsOptional,IsEmail,MinLength} from 'class-validator'
export class UpdateUserInput{
    @IsOptional()
    @IsEmail()
    email?:string
    @IsOptional()
    @MinLength(3)
    password?:string

}

export class UpdateUserAdminInput{
    @IsOptional()
    @IsEmail()
    email?:string
    @IsOptional()
    @MinLength(3)
    password?:string
    @IsOptional()
    isApproved?:boolean
}
