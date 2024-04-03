import { InMemoryTypeUserRepository } from "@test/repositories/in-memory-type-user-repository"
import { EditTypeUser } from "./edit-type-user";
import { makeTypeUser } from "@test/factories/type-user-factory";

describe("Edit Type User", () => {
    it("should be able to edit type user", async () => {
        const typeUserRepository = new InMemoryTypeUserRepository();
        const editTypeUser = new EditTypeUser(typeUserRepository);

        const typeUser = makeTypeUser();

        typeUserRepository.create(typeUser);

        await editTypeUser.execute({
            typeUserId: typeUser.id,
            title: 'New Title'
        });

        expect(typeUserRepository.typeUsers[0].title).toEqual('New Title');
    })
})