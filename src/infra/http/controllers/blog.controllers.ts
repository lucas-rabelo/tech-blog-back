import { Body, Controller, Param, Patch, Post } from "@nestjs/common";

import { ActiveBlog } from "@application/use-cases/blog/active/active-blog";
import { DisableBlog } from "@application/use-cases/blog/disable/disable-blog";
import { SendBlog } from "@application/use-cases/blog/send/send-blog";

import { CreateBlogBody } from "../dtos/blog/create-blog-body";

import { BlogViewModel } from "../view-models/blog/blog-view-model";

@Controller('blogs')
export class BlogController {
    constructor(
        private sendBlog: SendBlog,
        private activeBlog: ActiveBlog,
        private disableBlog: DisableBlog
    ) { }

    @Patch(':id/active')
    async active(@Param('id') id: string) {
      await this.activeBlog.execute({
        blogId: id
      })
    }

    @Patch(':id/disable')
    async disable(@Param('id') id: string) {
      await this.disableBlog.execute({
        blogId: id
      })
    }

    @Post()
    async create(@Body() body: CreateBlogBody) {
      const { title, content, categoryId, imageUrl, isActive, authorId } = body;
  
      const { blog } = await this.sendBlog.execute({
        title, 
        content, 
        categoryId, 
        imageUrl, 
        isActive, 
        authorId
      });
  
      return {
        blog: BlogViewModel.toHTTP(blog),
      };
    }
}