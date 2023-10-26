import mercury from "@mercury-js/core";
import { UserSchema } from "./User";
import { PageSchema } from "./Page";
import { WebsiteSchema } from "./Website";

mercury.createList("User", UserSchema);
mercury.createList("Page",PageSchema);
mercury.createList("Website", WebsiteSchema);
