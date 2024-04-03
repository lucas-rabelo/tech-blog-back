import { BlogRepository } from "@application/repositories/blog-repository";
import { BlogNotFound } from "@application/use-cases/errors/blog-not-found";
import { Injectable } from "@nestjs/common";

type ActiveBlogRequest = {
    blogId: string
}

type ActiveBlogResponse = void;
@Injectable()
export class ActiveBlog {
    constructor(private blogsRepository: BlogRepository) {}

    async execute(request: ActiveBlogRequest): Promise<ActiveBlogResponse> {
        const { blogId } = request;

        const blog = await this.blogsRepository.findById(blogId);

        if (!blog) {
            throw new BlogNotFound;
        }

        blog.activate();

        await this.blogsRepository.save(blog);
    }
}