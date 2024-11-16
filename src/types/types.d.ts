import type { JwtPayload } from "jsonwebtoken";

interface userToken extends JwtPayload {
  name: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: userToken;
    }
  }
}
