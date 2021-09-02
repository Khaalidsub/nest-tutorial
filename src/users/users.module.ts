import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersAdminController } from './users.admin.controller';
import { UsersService } from './users.service';
import { PostsModule } from 'src/posts/posts.module';
@Module({
  imports:[forwardRef(()=>PostsModule)],
  controllers: [UsersController, UsersAdminController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
