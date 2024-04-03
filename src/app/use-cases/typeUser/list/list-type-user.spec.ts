import { InMemoryTypeUserRepository } from "@test/repositories/in-memory-type-user-repository"
import { ListTypeUser } from "./list-type-user";
import { makeTypeUser } from "@test/factories/type-user-factory";

describe("List type users", () => {
    it("should be able to a list type users", async () => {
        const typeUserRepository = new InMemoryTypeUserRepository();
        const listTypeUser = new ListTypeUser(typeUserRepository);

        const typeUser = makeTypeUser();

        for(let i = 0; i < 10; i++) {
            typeUserRepository.create(typeUser);
        }

        const { data, total } = await listTypeUser.execute({
            page: 1,
            itemsPerPage: 10,
        });

        expect(typeUserRepository.typeUsers).toHaveLength(total);
        expect(typeUserRepository.typeUsers[0]).toEqual(data[0]);
    });
})