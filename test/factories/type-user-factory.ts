import { TypeUser, TypeUserProps } from "@application/entities/type-user/type-user";

type Override = Partial<TypeUserProps>;

export function makeTypeUser(override: Override = {}) {
    return new TypeUser({
        title: 'Título do blog',
        ...override
    });
}