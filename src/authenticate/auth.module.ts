import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthUserGuard } from './auth.user.guard';
import { UsersModule } from '../../src/users/users.module';
import { EmployeesModule } from '../../src/employees/employees.module';
import { UserTimesheetsModule } from '../../src/user_timesheets/user_timesheets.module';

@Module({
  imports: [
    UserTimesheetsModule,
    EmployeesModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRE_TIME },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthUserGuard],
})
export class AuthModule {}
