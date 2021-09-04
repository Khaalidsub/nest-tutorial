import { Injectable, forwardRef,Inject } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, posts } from './entities/post.entity';
@Injectable()
export class PostsService {
  constructor(@Inject(forwardRef(()=>UsersService)) private usersService:UsersService){}
  create({ authorId, body, title }: CreatePostDto) {
    const newPost = new Post(title, body, authorId);
    posts.push(newPost);
    return newPost
  }

  findAll() {
    return posts.map(post=>{
      return {...post, author:this.usersService.getUser(post.authorId)}
    })
  }

  findAllByAuthorId(authorId: number) {
    return posts.filter(post=>post.authorId === authorId)
  }

  findOne(id: number) {
    const post = posts.find((post,index)=>index===id)

    if(!post) throw new Error('Post not found')

    post.author = this.usersService.getUser(post.authorId)
    return post
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
