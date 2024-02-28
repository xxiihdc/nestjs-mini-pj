import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid token');
    }

    console.log("here")
    const token = authHeader.split(' ')[1];
    try {
      const decoded = this.jwtService.verify(token);
      console.log(decoded)
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
