import { Blog } from "@application/entities/blog/blog";

export class BlogViewModel {
    static toHTTP(blog: Blog) {
        return {
            id: blog.id,
            content: blog.content.value,
            categoryId: blog.categoryId,
            imageUrl: blog.imageUrl,
            isActive: blog.isActive,
            authorId: blog.authorId,
        }
    }
}