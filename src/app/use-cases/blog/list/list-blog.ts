import { Blog } from "@application/entities/blog/blog";
import { BlogRepository } from "@application/repositories/blog-repository";
import { Injectable } from "@nestjs/common";

type ListBlogRequest = {
    page: number;
    itemsPerPage: number;
    search?: string;
}

type ListBlogResponse = {
    data: Blog[];
    total: number;
}

@Injectable()
export class ListBlog {
    constructor(private blogRepository: BlogRepository) {}

    async execute(request: ListBlogRequest): Promise<ListBlogResponse> {
        const { page, itemsPerPage, search } = request;
    
        const typeUsers = await this.blogRepository.listAndSearch(page, itemsPerPage, search);

        return {
            data: typeUsers,
            total: typeUsers.length
        }
    }
}