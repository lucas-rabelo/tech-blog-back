import { Blog as RawBlog } from "@prisma/client";
import { Blog } from '@application/entities/blog/blog';
import { Content } from "@application/entities/blog/content";

export class PrismaBlogMapper {
    static toPrisma(blog: Blog) {
        return {
            id: blog.id,
            title: blog.title,
            content: blog.content,
            categoryId: blog.categoryId,
            imageUrl: blog.imageUrl,
            authorId: blog.authorId,
            isActive: blog.isActive,
            createdAt: blog.createdAt,
        }
    }

    static toDomain(raw: RawBlog): Blog {
        return new Blog(
            {
                title: raw.title,
                content: new Content(raw.content),
                categoryId: raw.categoryId,
                imageUrl: raw.imageUrl,
                authorId: raw.authorId,
                isActive: raw.isActive,
                createdAt: raw.createdAt,
            },
            raw.id
        )
    }
}