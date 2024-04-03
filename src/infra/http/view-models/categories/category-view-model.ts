import { Categories } from "@application/entities/categories/categories";

export class CategoryViewModel {
    static toHTTP(category: Categories) {
        return {
            id: category.id,
            title: category.title,
            createdAt: category.createdAt,
            createdById: category.createdById,
            updatedAt: category.updatedAt,
            updatedById: category.updatedById
        }
    }
}