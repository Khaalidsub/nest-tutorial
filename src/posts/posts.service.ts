import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, posts } from './entities/post.entity';
@Injectable()
export class PostsService {
  constructor(private usersService:UsersService){}
  create({ authorId, body, title }: CreatePostDto) {
    const newPost = new Post(title, body, authorId);
    posts.push(newPost);
    return newPost
  }

  findAll() {
    return posts;
  }

  findOne(id: number) {
    return posts[id]
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const post = posts[id]
    const updatedPost = {...post,...updatePostDto}
    posts[id] = updatedPost
    return updatedPost
  }

  remove(id: number) {
    return posts.splice(id,1)
  }
}
