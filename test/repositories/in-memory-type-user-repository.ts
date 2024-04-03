import { TypeUser } from "@application/entities/type-user/type-user";
import { TypeUserRepository } from "@application/repositories/type-user-repository";

export class InMemoryTypeUserRepository implements TypeUserRepository {
    public typeUsers: TypeUser[] = [];

    async create(typeUser: TypeUser) {
        this.typeUsers.push(typeUser);
    }

    async findById(typeUserId: string): Promise<TypeUser | null> {
        const typeUser = this.typeUsers.find(
            (item) => (item.id === typeUserId)
        )

        if (!typeUser) {
            return null;
        }

        return typeUser;
    }

    async listAndSearch(page: number, itemsPerPage: number, search?: string | undefined): Promise<TypeUser[]> {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const filteredRecords = this.typeUsers.filter(type => {
            if(!search) return true;
            
            return type.title.toLowerCase().includes(search.toLowerCase());
        });

        return filteredRecords.slice(startIndex, endIndex);
    }

    async save(typeUser: TypeUser): Promise<void> {
        const typeUserIndex = this.typeUsers.findIndex(
            (item) => item.id === typeUser.id
        )

        if(typeUserIndex >= 0) {
            this.typeUsers[typeUserIndex] = typeUser;
        }
    }
}