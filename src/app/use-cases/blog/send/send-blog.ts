import { Blog } from "@application/entities/blog/blog";
import { BlogRepository } from "@application/repositories/blog-repository";

type SendBlogRequest = {
    title: string;
    content: string;
    categoryId: string;
    imageUrl: string;
    isActive: boolean;
}

type SendBlogResponse = {
    blog: Blog;
}

export class SendBlog {
    constructor(private blogsRepository: BlogRepository) {}

    async execute(request: SendBlogRequest): Promise<SendBlogResponse> {
        const { title, content, categoryId, imageUrl, isActive } = request;

        const blog = new Blog({
            title,
            content,
            categoryId,
            imageUrl,
            isActive
        });
    }
}