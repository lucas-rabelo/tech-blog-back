import { Category as RawCategory } from "@prisma/client";
import { Categories } from '@application/entities/categories/categories';

export class PrismaCategoryMapper {
    static toPrisma(category: Categories) {
        return {
            id: category.id,
            title: category.title,
            createdById: category.createdById,
            createdAt: category.createdAt,
            updatedAt: category.updatedAt,
            updatedById: category.updatedById
        }
    }

    static toDomain(raw: RawCategory): Categories {
        return new Categories(
            {
                title: raw.title,
                createdById: raw.createdById,
            },
            raw.id
        )
    }
}