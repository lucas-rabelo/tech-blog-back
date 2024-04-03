import { TypeUser } from "@application/entities/type-user/type-user";
import { TypeUserRepository } from "@application/repositories/type-user-repository";
import { Injectable } from "@nestjs/common";

type TypeUserRequest = {
    title: string;
};

type TypeUserResponse= {
    typeUser: TypeUser;
}

@Injectable()
export class SendTypeUser {
    constructor(private typeUserRepository: TypeUserRepository) {}

    async execute(request: TypeUserRequest): Promise<TypeUserResponse> {
        const { title } = request;

        const typeUser = new TypeUser({
            title
        });

        await this.typeUserRepository.create(typeUser);

        return {
            typeUser
        }
    }
}