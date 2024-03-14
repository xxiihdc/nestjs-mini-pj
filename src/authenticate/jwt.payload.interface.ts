// jwt-payload.interface.ts
export interface JwtPayload {
  userId: string;
  username: string;
  role: 'user' | 'admin';
  createdTime: number;
}
