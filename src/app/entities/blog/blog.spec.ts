import { Blog } from "./blog"
import { Content } from "./content"

describe('Blog', () => {
    it('should be able to create a blog', () => {
        const blog = new Blog({
            title: "Title of blog",
            content: new Content("Content of blog"),
            imageUrl: "https://github.com/lucas-rabelo.png",
            isActive: true,
            authorId: '1',
            categoryId: '1'
        });

        expect(blog).toBeTruthy();
    })
})