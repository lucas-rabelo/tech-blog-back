import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { PrismaCategoryMapper } from '../mappers/prisma-category-mapper';
import { CategoryRepository } from "@application/repositories/category-repository";
import { Categories } from "@application/entities/categories/categories";

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
    constructor(private prisma: PrismaService) { }

    async findById(categoryId: string): Promise<Categories | null> {
        const category = await this.prisma.category.findUnique({
            where: {
                id: categoryId
            }
        })

        if(!category) {
            return null;
        }

        return PrismaCategoryMapper.toDomain(category)
    }

    async create(category: Categories): Promise<void> {
        const raw = PrismaCategoryMapper.toPrisma(category);

        await this.prisma.category.create({
            data: raw
        })
    }

    async save(category: Categories): Promise<void> {
        const raw = PrismaCategoryMapper.toPrisma(category);

        await this.prisma.category.update({
            where: {
                id: raw.id
            },
            data: raw
        })
    }
}