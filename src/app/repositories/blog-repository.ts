import { Blog } from '../entities/blog/blog';

export abstract class BlogRepository {
  abstract create(blog: Blog): Promise<void>;
  abstract findById(blogId: string): Promise<Blog | null>;
  abstract findManyByCategoryId(categoryId: string): Promise<Blog[]>;
  abstract listAndSearch(page: number, itemsPerPage: number, search?: string): Promise<Blog[]>;
  abstract save(blog: Blog): Promise<void>;
}
