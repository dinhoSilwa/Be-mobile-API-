import { Document } from "mongoose";
export interface CollaboratorProps extends Document {
  _id: string;
  role_id?: any;
  name: string;
  position: string;
  admission: string;
  phone: string;
}
