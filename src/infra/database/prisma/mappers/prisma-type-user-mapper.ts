import { TypeUser as RawTypeUser } from "@prisma/client";
import { TypeUser } from '@application/entities/type-user/type-user';

export class PrismaTypeUserMapper {
    static toPrisma(category: TypeUser) {
        return {
            id: category.id,
            title: category.title,
            createdAt: category.createdAt,
            updatedAt: category.updatedAt,
        }
    }

    static toDomain(raw: RawTypeUser): TypeUser {
        return new TypeUser(
            {
                title: raw.title,
            },
            raw.id
        )
    }
}