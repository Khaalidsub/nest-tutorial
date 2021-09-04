import {Controller,Get, Post, Body, Param, Put, Delete, Logger} from '@nestjs/common'
import {CreateUserInput} from './dto/create-user.input'
import { UsersService } from './users.service'
import { UpdateUserInput } from './dto/update-user.input'
@Controller('users')
export class UsersController{
    private logger = new Logger(UsersController.name)

    constructor(private usersService:UsersService){


    }

    @Get()
    getUsers(){
        try {
            const results =  this.usersService.getUsers()
            return results
        } catch (error) {
            // console.log(error)
            /**error */            
        }
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