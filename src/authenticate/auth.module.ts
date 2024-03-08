import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthUserGuard } from './auth.user.guard';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRE_TIME },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,AuthUserGuard]
})
export class AuthModule {}
