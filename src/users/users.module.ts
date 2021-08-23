import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersAdminController } from './users.admin.controller';
import { UsersService } from './users.service';
@Module({ controllers: [UsersController,UsersAdminController], providers: [UsersService], exports: [UsersService] })
export class UsersModule {}
