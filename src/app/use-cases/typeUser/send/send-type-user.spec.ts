import { InMemoryTypeUserRepository } from "@test/repositories/in-memory-type-user-repository"
import { SendTypeUser } from "./send-type-user";

describe("Send Type User", () => {
    it("should be able to send a Type User", async () => {
        const typeUserRepository = new InMemoryTypeUserRepository();
        const sendTypeUser = new SendTypeUser(typeUserRepository);

        const { typeUser } = await sendTypeUser.execute({
            title: 'This a typeUser'
        });

        expect(typeUserRepository.typeUsers).toHaveLength(1);
        expect(typeUserRepository.typeUsers[0]).toEqual(typeUser);
    })
})