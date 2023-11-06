export const UserSchema = {
  fields: {
    name: {
      type: "string",
      isRequired: true
    },
    email: {
      type: "string",
      isRequired: true,
      unique: true,
    },
    password: {
      type: "password",
      isRequired: true
    },
    role: {
      type: "enum",
      enumType: "string",
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    websites: {
      type: "virtual",
      ref: "Website",
      localField: "_id",
      foreignField: "author",
      many: true
    },
  },
  access: {
    default: true,
    acl: [
      { ADMIN: { create: true, read: true, update: true, delete: true } },
      { USER: { create: false, read: true, update: false, delete: false } },
      {
        ANONYMOUS: { read: false, update: false, delete: false, create: false },
      },
    ],
  },
};
