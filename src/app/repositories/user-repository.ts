import { User } from "@prisma/client";

export abstract class UserRepository {
    abstract create(user: User): Promise<void>;
    abstract findById(userId: string): Promise<User | null>;
    abstract listUsers(page: number, itemsPerPage: number, search?: string): Promise<User[]>;
    abstract findUserByTypeUserId(typeUserId: string): Promise<User[]>;
    abstract save(user: User): Promise<void>;
} 