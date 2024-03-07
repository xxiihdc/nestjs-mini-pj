import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RequestModel } from 'src/extends/req'
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthUserGuard implements CanActivate {
  constructor(private readonly userService: UsersService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private validateRequest(req: RequestModel):  boolean {
    const user = this.userService.findOne(req.user)
    return user != null
  }
}