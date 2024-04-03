import { TypeUser } from "@application/entities/type-user/type-user";

export class TypeUserViewModel {
    static toHTTP(typeUser: TypeUser) {
        return {
            id: typeUser.id,
            title: typeUser.title,
            createdAt: typeUser.createdAt,
            updatedAt: typeUser.updatedAt
        }
    }
}