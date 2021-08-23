import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[UsersModule], 
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
