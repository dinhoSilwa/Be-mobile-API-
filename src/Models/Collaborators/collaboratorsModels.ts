import { model, Schema } from "mongoose";
import type { CollaboratorProps } from "../../types/collaborators/collaboratorsTypes";

export const CollaboratorSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  admission: { type: String, required: true },
  phone: { type: String, required: true },
  role_id: {
    type: Schema.Types.ObjectId,
    ref: "authenticated-users",
    required: true,
  },
});

export const CollaboratorModel = model<CollaboratorProps>(
  "Collaborator",
  CollaboratorSchema,
);
