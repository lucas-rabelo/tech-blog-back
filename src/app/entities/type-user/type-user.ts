import { Replace } from "@helpers/Replace";
import { randomUUID } from "crypto";

export type TypeUserProps = {
    title: string;
    createdAt: Date;
    updatedAt?: Date;
}

export class TypeUser {
    private _id: string;
    private props: TypeUserProps;

    constructor(props: Replace<TypeUserProps, { createdAt?: Date }>, id?: string) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        }
    }

    public get id() {
        return this._id;
    }

    public set title(title: string) {
        this.title = title;
    }

    public get title() {
        return this.props.title;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }

    public update() {
        this.props.updatedAt = new Date();
    }
    
    public get updatedAt(): Date | null | undefined {
        return this.props.updatedAt;
    }
}