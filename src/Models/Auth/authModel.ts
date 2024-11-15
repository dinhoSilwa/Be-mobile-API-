import { model, Schema, type Document } from "mongoose";

export interface AuthUserProps extends Document {
  name: string;
  email: string;
  password: string;
}

export const AuthUser = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const AuthModel = model<AuthUserProps>("authenticated-users", AuthUser);
