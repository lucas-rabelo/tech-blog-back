import { BlogRepository } from "@application/repositories/blog-repository";
import { BlogNotFound } from "@application/use-cases/errors/blog-not-found";

type ActiveBlogRequest = {
    blogId: string
}

type ActiveBlogResponse = void;

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