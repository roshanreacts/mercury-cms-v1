export const PageSchema = {
    fields: {
        title: {
            type: "string",
            required: true
        },
        slug: {
            type: "string",
            required: true,
            unique: true
        },
        path: {
            type: "string",
            required: true
        },
        metaDescription: {
            type: "string"
        },
        status: {
            type: "enum",
            enumType: "string",
            enum: ["Draft", "Active"],
            default: "Draft"
        },
        website: {
            type: "relationship",
            ref: "Website",
            many: false,
            required: true
        },
        author: {
            type: "relationship",
            ref: "User",
            many: false,
            required: true
        },
        components: {
            type: "string"
        },
        metaTitle: {
            type: "string"
        },
        version: {
            type: "string"
        },
        access: {
            type: "object",
            properties: {
                ADMIN: {
                    type: "object",
                    properties: {
                        create: { type: "boolean", default: true },
                        read: { type: "boolean", default: true },
                        update: { type: "boolean", default: true },
                        delete: { type: "boolean", default: true }
                    }
                },
                ANONYMOUS: {
                    type: "object",
                    properties: {
                        create: { type: "boolean", default: false },
                        read: { type: "boolean", default: false },
                        update: { type: "boolean", default: false },
                        delete: { type: "boolean", default: false }
                    }
                },
                USER: {
                    type: "object",
                    properties: {
                        create: { type: "boolean", default: false },
                        read: { type: "boolean", default: true },
                        update: { type: "boolean", default: false },
                        delete: { type: "boolean", default: false }
                    }
                }
            }
        }
    }
}
