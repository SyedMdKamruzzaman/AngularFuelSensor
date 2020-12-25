import { Injectable } from '@angular/core';

@Injectable()
export class AppUtilityService {
  constructor() { }
   GetEnumValues(enumType) {
    return Object.keys(enumType).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
