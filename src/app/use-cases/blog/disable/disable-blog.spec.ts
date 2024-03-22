import { InMemoryBlogsRepository } from "@test/repositories/in-memory-blog-repository";
import { DisableBlog } from "./disable-blog";
import { makeBlog } from "@test/factories/blog-factory";
import { BlogNotFound } from "@application/use-cases/errors/blog-not-found";

describe("Active Blog", () => {
    it("should be able to disable a blog", async () => {
        const blogRepository = new InMemoryBlogsRepository();
        const disableBlog = new DisableBlog(blogRepository);

        const blog = makeBlog();

        blogRepository.create(blog);

        await disableBlog.execute({
            blogId: blog.id
        });

        expect(blogRepository.blogs[0].isActive).toBeFalsy()
    });

    it("should not be able to disable a non exist blog", async () => {
        const blogRepository = new InMemoryBlogsRepository();
        const disableBlog = new DisableBlog(blogRepository);

        expect(() => {
            return disableBlog.execute({
                blogId: 'fake-blog-id'
            });
        }).rejects.toThrow(BlogNotFound);
    });
});