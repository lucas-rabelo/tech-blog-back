import { InMemoryBlogsRepository } from "@test/repositories/in-memory-blog-repository";
import { GetBlog } from "./get-blog";
import { makeBlog } from "@test/factories/blog-factory";

describe("Get Blog", () => {
    it("should be able to get blog by id", async () => {
        const blogRepository = new InMemoryBlogsRepository();
        const getBlog = new GetBlog(blogRepository);

        const blog = makeBlog();

        blogRepository.create(blog);

        const blogFound = await getBlog.execute({
            blogId: blog.id
        });

        expect(blogRepository.blogs[0]).toEqual(blogFound);
    });
});