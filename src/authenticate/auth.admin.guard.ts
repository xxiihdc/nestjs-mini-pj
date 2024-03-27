import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RequestModel } from '../common/req';
import { UsersService } from '../../src/users/users.service';

@Injectable()
export class AuthUserGuard implements CanActivate {
  constructor(private readonly userService: UsersService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private async validateRequest(req: RequestModel): Promise<boolean> {
    try {
      const role = req.user.role
      if (role.toLocaleLowerCase() != "admin") {
        throw new UnauthorizedException('Unauthorized access');
      }
      const admin = await this.userService.findOne(req.user.userId);
      return admin != null;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
