import { Blog } from "@application/entities/blog/blog";
import { BlogRepository } from "@application/repositories/blog-repository";

export class InMemoryBlogsRepository implements BlogRepository {
    public blogs: Blog[] = [];

    async findById(blogId: string): Promise<Blog | null> {
        const blog = this.blogs.find(
            (item) => (item.id === blogId)
        )

        if (!blog) {
            return null;
        }

        return blog;
    }

    async listAndSearch(page: number, itemsPerPage: number, search?: string | undefined): Promise<Blog[]> {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const filteredRecords = this.blogs.filter(type => {
            if(!search) return true;
            
            return type.title.toLowerCase().includes(search.toLowerCase());
        });

        return filteredRecords.slice(startIndex, endIndex);
    }

    async findManyByCategoryId(categoryId: string): Promise<Blog[]> {
        return this.blogs.filter(
            (blog) => blog.categoryId === categoryId
        );
    }

    async create(blog: Blog) {
        this.blogs.push(blog);
    }

    async save(blog: Blog): Promise<void> {
        const blogIndex = this.blogs.findIndex(
            (item) => item.id === blog.id
        )

        if (blogIndex >= 0) {
            this.blogs[blogIndex] = blog;
        }
    }
}