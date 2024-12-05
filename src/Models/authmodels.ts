import { model, Schema } from 'mongoose'
import type { AuthUserProps } from '../types/auth/authTypes.js'

const AuthUser = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

export const AuthModel = model<AuthUserProps>(
  'authUsers',
  AuthUser,
  'authenticated-users',
)
