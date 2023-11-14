import mercury from "@mercury-js/core";
import { UserSchema } from "./User";
import { PageSchema } from "./Page";
import { WebsiteSchema } from "./Website";
import { extendModelTypes } from "@mercury-js/core/packages/extendModelTypes";



mercury.package([
    extendModelTypes({
        definition: `
          createdOn: DateTime
          updatedOn: DateTime
          `,
    }),
]);


mercury.createList("User", UserSchema);
mercury.createList("Page", PageSchema);
mercury.createList("Website", WebsiteSchema);
