import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";

import { ActiveBlog } from "@application/use-cases/blog/active/active-blog";
import { DisableBlog } from "@application/use-cases/blog/disable/disable-blog";
import { SendBlog } from "@application/use-cases/blog/send/send-blog";

import { CreateBlogBody } from "../dtos/blog/create-blog-body";

import { BlogViewModel } from "../view-models/blog/blog-view-model";
import { ListBlog } from "@application/use-cases/blog/list/list-blog";

@Controller('blogs')
export class BlogController {
    constructor(
        private sendBlog: SendBlog,
        private activeBlog: ActiveBlog,
        private disableBlog: DisableBlog,
        private listBlog: ListBlog
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

    @Get()
    async list(
        @Query('page') page: number, 
        @Query('itemsPerPage') itemsPerPage: number,
        @Query('search') search?: string
    ) {
        const { data, total } = await this.listBlog.execute({
            page,
            itemsPerPage,
            search
        });

        return {
            data: data.map(BlogViewModel.toHTTP),
            total
        }
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