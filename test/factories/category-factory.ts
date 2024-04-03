import { Categories, CategorieProps } from "@application/entities/Categories/Categories";

type Override = Partial<CategorieProps>;

export function makeCategories(override: Override = {}) {
    return new Categories({
        title: 'Título do blog',
        createdById: "1",
        ...override
    });
}