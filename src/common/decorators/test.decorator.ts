import { applyDecorators } from '@nestjs/common';

export function TestDecorator() {
  console.log('Decorator running!');
  return applyDecorators();
}
