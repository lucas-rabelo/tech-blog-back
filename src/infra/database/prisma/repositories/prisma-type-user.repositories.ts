import { TypeUserRepository } from "@application/repositories/type-user-repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { TypeUser } from "@application/entities/type-user/type-user";
import { PrismaTypeUserMapper } from "../mappers/prisma-type-user-mapper";

@Injectable()
export class PrismaTypeUserRepository implements TypeUserRepository {
    constructor(private prisma: PrismaService) { }

    async findById(typeUserId: string): Promise<TypeUser | null> {
        const typeUser = await this.prisma.typeUser.findUnique({
            where: {
                id: typeUserId
            }
        }) 

        if(!typeUser) {
            return null;
        }

        return PrismaTypeUserMapper.toDomain(typeUser)
    }

    async listAndSearch(page: number, itemsPerPage: number, search?: string | undefined): Promise<TypeUser[]> {
        const skip = Number((page - 1) * itemsPerPage);
        const take = Number(itemsPerPage);

        const typeUsers = await this.prisma.typeUser.findMany({
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

        return typeUsers.map(typeUser => PrismaTypeUserMapper.toDomain(typeUser))
    }

    async create(typeUser: TypeUser): Promise<void> {
        const raw = PrismaTypeUserMapper.toPrisma(typeUser)

        await this.prisma.typeUser.create({
            data: raw
        })
    }

    async save(typeUser: TypeUser): Promise<void> {
        const raw = PrismaTypeUserMapper.toPrisma(typeUser);

        await this.prisma.typeUser.update({
            where: {
                id: raw.id
            },
            data: raw
        })
    }
}