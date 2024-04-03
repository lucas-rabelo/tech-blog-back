import { Blog } from "@application/entities/blog/blog";
import { BlogRepository } from "@application/repositories/blog-repository";
import { BlogNotFound } from "@application/use-cases/errors/blog-not-found";
import { Injectable } from "@nestjs/common";

type GetBlogResponse = {
    blog: Blog
}

type GetBlogRequest = {
    blogId: string;
}

@Injectable()
export class GetBlog {
    constructor(private blogRepository: BlogRepository) { }

    async execute(request: GetBlogRequest): Promise<GetBlogResponse> {
        const { blogId } = request;

        const blog = await this.blogRepository.findById(blogId);

        if(!blog) {
            throw new BlogNotFound;
        }

        return {
            blog
        };
    }
}