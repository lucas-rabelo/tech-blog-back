import { TypeUser } from "./type-user"

describe("Type User", () => {
    it("should be able to create TypeUser", () => {
        const typeUser = new TypeUser({
            title: 'super-admin'
        });

        expect(typeUser).toBeTruthy();
    })
})