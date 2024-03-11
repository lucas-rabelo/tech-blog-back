import { Blog } from '../entities/blog/blog';

export abstract class BlogRepository {
  abstract create(blog: Blog): Promise<void>;
  abstract findById(blogId: string): Promise<Blog | void>;
  abstract save(blog: Blog): Promise<void>;
  abstract findManyByCategoryId(categoryId: string): Promise<Blog[] | void>;
}
