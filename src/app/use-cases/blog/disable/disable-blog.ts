import { BlogRepository } from "@application/repositories/blog-repository";
import { BlogNotFound } from "@application/use-cases/errors/blog-not-found";
import { Injectable } from "@nestjs/common";

type DisableBlogRequest = {
    blogId: string
}

type DisableBlogResponse = void;
@Injectable()
export class DisableBlog {
    constructor(private blogsRepository: BlogRepository) {}

    async execute(request: DisableBlogRequest): Promise<DisableBlogResponse> {
        const { blogId } = request;

        const blog = await this.blogsRepository.findById(blogId);

        if (!blog) {
            throw new BlogNotFound;
        }

        blog.disable();

        await this.blogsRepository.save(blog);
    }
}