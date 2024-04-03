import { TypeUser } from "@application/entities/type-user/type-user";

export abstract class TypeUserRepository {
    abstract create(typeUser: TypeUser): Promise<void>;
    abstract findById(typeUserId: string): Promise<TypeUser | null>;
    abstract listAndSearch(page: number, itemsPerPage: number, search?: string): Promise<TypeUser[]>
    abstract save(typeUser: TypeUser): Promise<void>;
}