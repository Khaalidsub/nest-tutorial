export class UpdateUserInput{
    email?:string
    password?:string

}

export class UpdateUserAdminInput{
    email?:string
    password?:string
    isApproved?:boolean
}
