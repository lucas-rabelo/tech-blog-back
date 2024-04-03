import { Categories } from "./categories";

describe("Categories", () => {
    it("should be able to create a category", () => {
        const category = new Categories({
            title: "Title of blog",
            createdById: "1"
        });

        expect(category).toBeTruthy();
    });
});