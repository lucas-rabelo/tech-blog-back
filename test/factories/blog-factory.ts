import { Content } from "@application/entities/blog/content";
import { Blog, BlogProps } from "@application/entities/blog/blog";

type Override = Partial<BlogProps>;

export function makeBlog(override: Override = {}) {
    return new Blog({
        categoryId: '1',
        authorId: '1',
        title: 'Título do blog',
        content: new Content("Esse é o novo conteúdo para o nosso blog"),
        imageUrl: 'https://github.com/lucas-rabelo.png',
        isActive: true,
        ...override
    });
}