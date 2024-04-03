import { Injectable } from "@nestjs/common";
import { BlogRepository } from "@application/repositories/blog-repository";
import { Blog } from "@application/entities/blog/blog";
import { PrismaService } from "../prisma.service";
import { PrismaBlogMapper } from "../mappers/prisma-blog-mapper";

@Injectable()
export class PrismaBlogRepository implements BlogRepository {
    constructor(private prisma: PrismaService) { }

    async findById(blogId: string): Promise<Blog | null> {
        const blog = await this.prisma.blog.findUnique({
            where: {
                id: blogId
            }
        })

        if(!blog) {
            return null;
        }

        return PrismaBlogMapper.toDomain(blog)
    }

    async listAndSearch(page: number, itemsPerPage: number, search?: string | undefined): Promise<Blog[]> {
        const skip = Number((page - 1) * itemsPerPage);
        const take = Number(itemsPerPage);

        const blogs = await this.prisma.blog.findMany({
            orderBy: [
                {
                    updatedAt: 'desc',
                },
            ],
            where: {
                OR: [{ title: { contains: search || '', mode: 'insensitive' } }],
            },
            skip: skip,
            take: take,
        });

        return blogs.map(PrismaBlogMapper.toDomain)
    }

    async findManyByCategoryId(categoryId: string): Promise<Blog[]> {
        const blogs = await this.prisma.blog.findMany({
            where: {
                categoryId
            }
        });

        return blogs.map(PrismaBlogMapper.toDomain)
    }

    async create(blog: Blog): Promise<void> {
        const raw = PrismaBlogMapper.toPrisma(blog);

        await this.prisma.blog.create({
            data: raw
        })
    }

    async save(blog: Blog): Promise<void> {
        const raw = PrismaBlogMapper.toPrisma(blog);

        await this.prisma.blog.update({
            where: {
                id: raw.id
            },
            data: raw
        })
    }
}