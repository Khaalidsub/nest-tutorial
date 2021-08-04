import {Controller,Get, Post, Body, Param, Put, Delete} from '@nestjs/common'
import {users,User} from './entity/user.entity'
@Controller('users')
export class UsersController{

    @Get()
    getUsers(){
        return users
    }
    @Get('/:id')
    getUser(@Param('id') id:number){
        return users[id]
    }

    @Post()
    createUser(@Body() data:any){
        const newUser = new User(data.email,data.password)
        users.push(newUser)
        return newUser
    }

    @Put('/:id')
    updateUser(@Param('id') id:number ,@Body() data:any){
        const user = users[id]
        user.email = data.email
        user.password = data.password
        users[id] = user
        return user
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:number){
        return 'user has been removed'
    }
}