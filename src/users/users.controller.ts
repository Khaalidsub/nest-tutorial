import {Controller,Get, Post, Body, Param, Put, Delete} from '@nestjs/common'
import {users,User} from './entity/user.entity'
import {CreateUserInput} from './dto/create-user.input'
import { UsersService } from './users.service'
import { UpdateUserInput } from './dto/update-user.input'
@Controller('users')
export class UsersController{

    constructor(private usersService:UsersService){


    }

    @Get()
    getUsers(){
        return this.usersService.getUsers()
    }
    @Get('/:id')
    getUser(@Param('id') id:number){
        return this.usersService.getUser(id)
    }

    @Post()
    createUser(@Body() data:CreateUserInput){

        return this.usersService.createUser(data)
    }

    @Put('/:id')
    updateUser(@Param('id') id:number ,@Body() data:UpdateUserInput){
        return this.usersService.updateUser(id,data)
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:number){
        return this.usersService.deleteUser(id)
    }
}