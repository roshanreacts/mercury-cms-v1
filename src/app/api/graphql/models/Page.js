export const PageSchema = {
    fields: {
        title: {
            type: "string"
        },
        slug: {
            type: "string"
        },
        path: {
            type: "string"
        },
        metaDescription: {
            type: "string"
        },
        status: {
            type: "enum",
            enumType: "string",
            enum: ["Draft", "Active"],
            default: "Draft",
        },
        website: {
            type: "relationship",
            ref: "Website",
            many: false
        },
        author: {
            type: "relationship",
            ref: "User",
            many: false
        },
        components: {
            type: "string"
        },
        version: {
            type: "string"
        },
        access: {
            default: false,
            acl: [
                { 
                    ADMIN: { create: true, read: true, update: true, delete: true } 
                },
                {
                    ANONYMOUS: { read: false, update: false, delete: false, create: false },
                },
                {
                    USER: { read: true, update: false, delete: false, create: false },
                }
            ],
        },
    }
}