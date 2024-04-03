import { IsBoolean, IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateBlogBody {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @Length(5)
    content: string;

    @IsNotEmpty()
    @IsUUID()
    categoryId: string;

    @IsNotEmpty()
    imageUrl: string;

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;

    @IsNotEmpty()
    @IsUUID()
    authorId: string;
}