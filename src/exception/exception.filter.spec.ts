import { AllExceptionFilter } from './exception.filter';

describe('ExceptionFilter', () => {
  it('should be defined', () => {
    expect(new AllExceptionFilter()).toBeDefined();
  });
});
