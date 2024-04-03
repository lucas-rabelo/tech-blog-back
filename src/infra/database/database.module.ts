import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

// Repositories
import { BlogRepository } from "@application/repositories/blog-repository";
import { CategoryRepository } from "@application/repositories/category-repository";
import { PrismaTypeUserRepository } from "./prisma/repositories/prisma-type-user.repositories";

// PrismaRepositories
import { PrismaBlogRepository } from "./prisma/repositories/prisma-blog-repositories";
import { PrismaCategoryRepository } from "./prisma/repositories/prisma-category-repositories";
import { TypeUserRepository } from "@application/repositories/type-user-repository";

@Module({
    providers: [
        PrismaService,
        { provide: BlogRepository, useClass: PrismaBlogRepository },
        { provide: CategoryRepository, useClass: PrismaCategoryRepository },
        { provide: TypeUserRepository, useClass: PrismaTypeUserRepository },
    ],
    exports: [
        BlogRepository,
        CategoryRepository,
        TypeUserRepository
    ]
})

export class DatabaseModule { }