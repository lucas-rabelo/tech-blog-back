import { InMemoryBlogsRepository } from "@test/repositories/in-memory-blog-repository";
import { ActiveBlog } from "./active-blog";
import { makeBlog } from "@test/factories/blog-factory";
import { BlogNotFound } from "@application/use-cases/errors/blog-not-found";

describe("Active Blog", () => {
    it("should be able to active a blog", async () => {
        const blogRepository = new InMemoryBlogsRepository();
        const activeBlog = new ActiveBlog(blogRepository);

        const blog = makeBlog();

        blogRepository.create(blog);

        await activeBlog.execute({
            blogId: blog.id
        });

        expect(blogRepository.blogs[0].isActive).toBeTruthy()
    });

    it("should not be able to active a non exist blog", async () => {
        const blogRepository = new InMemoryBlogsRepository();
        const activeBlog = new ActiveBlog(blogRepository);

        expect(() => {
            return activeBlog.execute({
                blogId: 'fake-blog-id'
            });
        }).rejects.toThrow(BlogNotFound);
    });
});