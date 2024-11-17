import { Document } from "mongoose";
export interface IColalaborator extends Document {
  // avatar?: string;
  role_id?: any;
  name: string;
  position: string;
  admission: string;
  phone: string;
}
