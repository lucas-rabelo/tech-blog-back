import { InMemoryCategoriesRepository } from "@test/repositories/in-memory-category-repository"
import { SendCategory } from "./send-category";

describe("Send Category", () => {
    it("should be able to create a category", async () => {
        const categoryRepository = new InMemoryCategoriesRepository();
        const sendCategory = new SendCategory(categoryRepository);

        const { category } = await sendCategory.execute({
            title: "This a title of category",
            createdById: "1"
        });

        expect(categoryRepository.categories).toHaveLength(1);
        expect(categoryRepository.categories[0]).toEqual(category);
    })
})