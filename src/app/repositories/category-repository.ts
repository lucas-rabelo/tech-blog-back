import { Categories } from "@application/entities/categories/categories";

export abstract class CategoryRepository {
    abstract create(category: Categories): Promise<void>;
    abstract findById(categoryId: string): Promise<Categories | null>;
    abstract save(category: Categories): Promise<void>;
}