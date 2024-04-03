import { Categories } from "@application/entities/categories/categories";
import { CategoryRepository } from "@application/repositories/category-repository";

export class InMemoryCategoriesRepository implements CategoryRepository {
    public categories: Categories[] = [];

    async findById(categoryId: string): Promise<Categories | null> {
        const category = this.categories.find(
            (item) => (item.id === categoryId)
        )

        if (!category) {
            return null;
        }

        return category;
    }

    async create(category: Categories) {
        this.categories.push(category);
    }

    async save(category: Categories): Promise<void> {
        const categoryIndex = this.categories.findIndex(
            (item) => item.id === category.id
        )

        if (categoryIndex >= 0) {
            this.categories[categoryIndex] = category;
        }
    }
}