import mercury from "@mercury-js/core";
import { GraphQLError } from "graphql";
import jwt from 'jsonwebtoken';

export default {
  Query: {
    hello: (root, { name }, ctx) => {
      // console.log(ctx);
      return `Hello ${name || "World"}`;
    }
  },

  Mutation: {
    login: async (root, { email, password }, ctx) => {

      try {
        const user = await mercury.db.User.findOne({ email: email });
        if (!user) {
          throw new GraphQLError("User Doesn't Exists");
        }

        if (user.role !== "ADMIN"){
          throw new GraphQLError ("You Are Not Allowed To This Resource")
        }


        const passwordCompare = await user.verifyPassword(password);

        if (!passwordCompare) {
          throw new GraphQLError("Please Check Password Entered!!");
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP })
        // ctx.setCookie('authToken', token, {
        //   httpOnly: true,
        //   maxAge: 60 * 60 
        // })

        return { message: "Login Success", token, name: user.name, email:user.email, role: user.role, id: user.id }
      } catch (error) {
        throw new GraphQLError(error)
      }
    }
  }
};
