import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { JwtMiddleware } from './middleware/jwt.middleware';
import { AuthModule } from './authenticate/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    EmployeesModule,
    AuthModule,
    JwtModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtMiddleware],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*');
  }
}
