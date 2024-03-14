import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { RequestModel } from 'src/extends/req';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: RequestModel, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      console.log('duc here');
      const token = authHeader.split(' ')[1];
      try {
        const decoded = this.jwtService.verify(token);
        console.log('duc debug');
        console.log(decoded);
        console.log(this.jwtService);
        req.user = decoded.userId;
      } catch (err) {
        console.log(err);
        throw new UnauthorizedException('Invalid token');
      }
    }
    next();
  }
}
