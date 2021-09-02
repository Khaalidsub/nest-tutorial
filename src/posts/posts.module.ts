import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { UsersModule } from '../users/users.module';


@Module({
  imports:[forwardRef(()=>UsersModule)], 
  controllers: [PostsController],
  providers: [PostsService],
  exports:[PostsService]
})
export class PostsModule {}
