import { Module } from "@nestjs/common";

import { DatabaseModule } from "@infra/database/database.module";

// Use Cases of Blog
import { ActiveBlog } from "@application/use-cases/blog/active/active-blog";
import { DisableBlog } from "@application/use-cases/blog/disable/disable-blog";
import { SendBlog } from "@application/use-cases/blog/send/send-blog";
import { ListBlog } from "@application/use-cases/blog/list/list-blog";

// Use Cases of Category
import { SendCategory } from "@application/use-cases/categories/send/send-category";

//Use Cases of TypeUser
import { SendTypeUser } from "@application/use-cases/typeUser/send/send-type-user";
import { EditTypeUser } from "@application/use-cases/typeUser/edit/edit-type-user";

// Controllers
import { BlogController } from "./controllers/blog.controllers";
import { CategoryController } from "./controllers/category.controllers";
import { TypeUserController } from "./controllers/type-user.controllers";
import { ListTypeUser } from "@application/use-cases/typeUser/list/list-type-user";

@Module({
    imports: [DatabaseModule],
    controllers: [
        BlogController,
        CategoryController,
        TypeUserController
    ],
    providers: [
        SendBlog,
        ActiveBlog,
        DisableBlog,
        ListBlog,

        SendCategory,

        SendTypeUser,
        EditTypeUser,
        ListTypeUser
    ]
})

export class HttpModule { }