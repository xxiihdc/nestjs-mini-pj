// import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class RoleMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     const userRole = req.user.role;

//     if (userRole !== 'admin') {
//       throw new UnauthorizedException('Unauthorized access');
//     }
//     next();
//   }
// }
