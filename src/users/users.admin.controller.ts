import {Controller,Get, Post, Body, Param, Put, Delete, UseGuards} from '@nestjs/common'
import {users,User} from './entity/user.entity'
import {UsersService} from './users.service'
@Controller('users')
export class UsersAdminController{
    constructor(private usersService:UsersService){}

    @Get(':id/application')
    approveUser(@Param('id') id:number){
        return this.usersService.updateUser(id,{isApproved:true})
    }


}