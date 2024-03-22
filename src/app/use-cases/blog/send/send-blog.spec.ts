import { InMemoryBlogsRepository } from '@test/repositories/in-memory-blog-repository';
import { SendBlog } from "./send-blog";

describe('Send blog', () => {
    it('should be able to send blog', async () => {
        const blogRepository = new InMemoryBlogsRepository();
        const sendBlog = new SendBlog(blogRepository);

        const { blog } = await sendBlog.execute({
            title: 'This a title of blog',
            content: 'This a content of blog',
            categoryId: '1',
            authorId: '1',
            imageUrl: 'https://github.com/lucas-rabelo.png',
            isActive: true
        });

        expect(blogRepository.blogs).toHaveLength(1);
        expect(blogRepository.blogs[0]).toEqual(blog);
    });
});