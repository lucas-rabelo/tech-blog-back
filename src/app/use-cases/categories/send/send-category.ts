import { Categories } from "@application/entities/categories/categories";
import { CategoryRepository } from "@application/repositories/category-repository";
import { Injectable } from "@nestjs/common";

type SendCategoryRequest = {
    title: string;
    createdById: string;
}

type SendCategoryResponse = {
    category: Categories;
}

@Injectable()
export class SendCategory {
    constructor(private categoryRepository: CategoryRepository) {}

    async execute(request: SendCategoryRequest): Promise<SendCategoryResponse> {
        const { title, createdById } = request;

        const category = new Categories({
            title,
            createdById
        });

        await this.categoryRepository.create(category);

        return {
            category
        }
    }
}