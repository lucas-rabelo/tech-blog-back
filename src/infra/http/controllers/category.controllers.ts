import { SendCategory } from "@application/use-cases/categories/send/send-category";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateCategoriesBody } from "../dtos/categories/create-categories-body";
import { CategoryViewModel } from "../view-models/categories/category-view-model";

@Controller('categories')
export class CategoryController {
    constructor(
        private sendCategory: SendCategory,
        // private listCategories: ListCategories,
        // private getCategory: GetCategory,
        // private updateCategory: UpdateCategory,
        // private disableCategory: DisableCategory,
        // private activeCategory: ActiveCategory
    ) { }

    @Post()
    async create(@Body() body: CreateCategoriesBody) {
        const { title, createdById } = body;

        const { category } = await this.sendCategory.execute({
            title,
            createdById
        })

        return {
            category: CategoryViewModel.toHTTP(category)
        }
    }
}