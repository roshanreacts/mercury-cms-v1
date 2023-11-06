export const WebsiteSchema = {
    fields: {
        slug: {
            type: "string"
        },
        name: {
            type: "string"
        },
        description: {
            type: "string"
        },
        domain: {
            type: "string"
        },
        status: {
            type: "enum",
            enumType: "string",
            enum: ["Draft", "Published"],
            default: "Draft",
        },
        author: {
            type: "relationship",
            ref: "User",
            many: false
        },
        pages: {
            type: "virtual",
            ref: "Page",
            localField: "_id",
            foreignField: "website",
            many: true
        },
        access: {
            default: false,
            acl: [
                { ADMIN: { create: true, read: true, update: true, delete: true } },
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