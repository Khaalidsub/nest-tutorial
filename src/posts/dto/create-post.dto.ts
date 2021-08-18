import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title:string
    @IsNotEmpty()
    @IsString()
    body:string
    @IsNotEmpty()
    @IsNumber()
    authorId:number
}
