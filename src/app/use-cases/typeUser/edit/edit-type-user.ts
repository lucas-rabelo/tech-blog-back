import { TypeUser } from "@application/entities/type-user/type-user";
import { TypeUserRepository } from "@application/repositories/type-user-repository";
import { TypeUserNotFound } from "@application/use-cases/errors/type-user-not-found";
import { Injectable } from "@nestjs/common";

type EditTypeUserRequest = {
    typeUserId: string;
    title: string;
}

type EditTypeUserResponse = void;

@Injectable()
export class EditTypeUser {
    constructor(private typeUserRepository: TypeUserRepository) {}

    async execute(request: EditTypeUserRequest): Promise<EditTypeUserResponse> {
        const { typeUserId, title } = request;

        const typeUser = await this.typeUserRepository.findById(typeUserId)

        if(!typeUser) {
            throw TypeUserNotFound;
        }

        const typeUserEdit = new TypeUser({
            title
        }, typeUser.id);

        typeUserEdit.update();

        await this.typeUserRepository.save(typeUserEdit);
    }
}