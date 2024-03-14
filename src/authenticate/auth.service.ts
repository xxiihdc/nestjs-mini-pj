import { Injectable } from '@nestjs/common';
import * as jwt from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: jwt.JwtService) {}

  generateToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string): any {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
