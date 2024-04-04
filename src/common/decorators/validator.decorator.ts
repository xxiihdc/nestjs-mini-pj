import { applyDecorators } from "@nestjs/common";


export function ClearValidator(...decoratorName): ClassDecorator {
  return (target: any) => {
    const properties = Object.getOwnPropertyNames(target.prototype);
    properties.forEach(property => {
      const decorators = Reflect.getMetadata('design:type', target.prototype, property);
      if (decorators) {
        const newDecorators = decorators.filter((decorator: any) => {
          return !decoratorName.includes(decorator.name);
        });
        Reflect.defineMetadata('design:type', newDecorators, target.prototype, property);
      }
    });
  };
}

export function ApplyCustomValidators(...validators: Function[]): PropertyDecorator{
  return applyDecorators(
    ...validators.map(validator => validator())
  );
}
