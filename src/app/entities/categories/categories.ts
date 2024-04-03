import { Replace } from "@helpers/Replace";
import { randomUUID } from "crypto";

export type CategorieProps = {
    title: string;
    createdAt: Date;
    updatedAt?: Date;
    createdById: string;
    updatedById?: string;
}

export class Categories {
    private _id: string;
    private props: CategorieProps;

    constructor(props: Replace<CategorieProps, { createdAt?: Date }>, id?: string) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
      }

    public get id() {
        return this._id;
    }

    public set title(title: string) {
        this.props.title = title;
    }

    public get title() {
        return this.props.title;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }

    public set createdById(createdById: string) {
        this.props.createdById = createdById;
    }

    public get createdById() {
        return this.props.createdById;
    }

    public update() {
        this.props.updatedAt = new Date();
    }

    public get updatedAt(): Date | null | undefined {
        return this.props.updatedAt;
    }

    public set updatedById(updatedById: string) {
        this.props.updatedById = updatedById;
    }

    public get updatedById(): string | undefined {
        return this.props.updatedById;
    }
}