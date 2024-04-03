import { InMemoryBlogsRepository } from "@test/repositories/in-memory-blog-repository"
import { ListBlog } from "./list-blog";
import { makeBlog } from "@test/factories/blog-factory";

describe("List blogs", () => {
    it("should be able to a list blogs", async () => {
        const blogRepository = new InMemoryBlogsRepository();
        const listBlog = new ListBlog(blogRepository);

        const blog = makeBlog();

        for(let i = 0; i < 10; i++) {
            blogRepository.create(blog);
        }

        const { data, total } = await listBlog.execute({
            page: 1,
            itemsPerPage: 10,
        });

        expect(blogRepository.blogs).toHaveLength(total);
        expect(blogRepository.blogs[0]).toEqual(data[0]);
    });
})