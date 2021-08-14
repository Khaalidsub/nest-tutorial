import {Controller,Get, Post, Body, Param, Put, Delete} from '@nestjs/common'
import {users,User} from './entity/user.entity'
import { UsersService } from './users.service'
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
    createUser(@Body() data:any){
        
        return this.usersService.createUser(data)
    }

    @Put('/:id')
    updateUser(@Param('id') id:number ,@Body() data:any){
        return this.usersService.updateUser(id,data)
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:number){
        return this.usersService.deleteUser(id)
    }
}