import { Document } from "mongoose";
export interface IColalaborator extends Document {
 // avatar?: string;
  name: string;
  position: string;
  admission: string;
  phone: string;
}
