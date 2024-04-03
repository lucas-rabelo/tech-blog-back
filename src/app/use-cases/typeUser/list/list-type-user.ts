import { TypeUser } from "@application/entities/type-user/type-user";
import { TypeUserRepository } from "@application/repositories/type-user-repository";
import { Injectable } from "@nestjs/common";

type ListTypeUserRequest = {
    page: number;
    itemsPerPage: number;
    search?: string;
}

type ListTypeUserResponse = {
    data: TypeUser[];
    total: number;
}

@Injectable()
export class ListTypeUser {
    constructor(private typeUserRepository: TypeUserRepository) { }

    async execute(request: ListTypeUserRequest): Promise<ListTypeUserResponse> {
        const { page, itemsPerPage, search } = request;
    
        const typeUsers = await this.typeUserRepository.listAndSearch(page, itemsPerPage, search);

        return {
            data: typeUsers,
            total: typeUsers.length
        }
    }
}