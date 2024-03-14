export class BaseDto<T> {
  constructor(data: T) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        copyKey(key);
      }
    }

    function copyKey(key: Extract<keyof T, string>) {
      this[key] = data[key];
    }
  }

  protected copyObject(): T {
    return { ...this } as unknown as T;
  }
}

export interface IBaseDto<T> {
  toObject(): T;
}
