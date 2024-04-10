import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // const status = exception instanceof EntityNotFoundException ? HttpStatus.NOT_FOUND :
    //                exception instanceof EntityInvalidException ? HttpStatus.BAD_REQUEST :
    //                HttpStatus.INTERNAL_SERVER_ERROR;
    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    response.status(status).json({
      statusCode: status,
      errors: {},
      message: '',
    });
  }
}
