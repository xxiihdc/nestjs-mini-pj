import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthUserGuard } from '../../authenticate/auth.user.guard';

export function HasRole(role: string) {
  if(role == "admin"){
    return applyDecorators(
      UseGuards(AuthUserGuard)
    );
  }

  return applyDecorators(
    UseGuards(AuthUserGuard)
    );
}


