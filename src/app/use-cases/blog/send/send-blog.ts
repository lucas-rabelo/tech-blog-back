import { Blog } from "@application/entities/blog/blog";
import { Content } from "@application/entities/blog/content";
import { BlogRepository } from "@application/repositories/blog-repository";

type SendBlogRequest = {
    title: string;
    content: string;
    categoryId: string;
    authorId: string;
    imageUrl: string;
    isActive: boolean;
}

type SendBlogResponse = {
    blog: Blog;
}

export class SendBlog {
    constructor(private blogsRepository: BlogRepository) {}

    async execute(request: SendBlogRequest): Promise<SendBlogResponse> {
        const { title, content, categoryId, authorId, imageUrl, isActive } = request;

        const blog = new Blog({
            title,
            content: new Content(content),
            categoryId,
            authorId,
            imageUrl,
            isActive
        });

        await this.blogsRepository.create(blog);

        return {
            blog,
        }
    }
}