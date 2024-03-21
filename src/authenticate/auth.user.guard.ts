import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RequestModel } from '../../src/extends/req';
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
      const user = await this.userService.findOne(req.user.userId);
      return user != null;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
