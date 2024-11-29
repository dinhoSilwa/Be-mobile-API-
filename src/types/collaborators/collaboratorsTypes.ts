import { Document } from 'mongoose';
export interface CollaboratorProps extends Document {
  _id: string;
  role_id?: string;
  name: string;
  position: string;
  admission: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
}
