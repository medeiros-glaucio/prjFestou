import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length === 11) {
      return `(${value.substr(0, 2)}) ${value.substr(2, 5)}-${value.substr(7, 4)}`;
    }
    if (value && value.length === 8){
      return `${value.substr(0, 4,)}-${value.substr(4,4)}`
    }
    return value;
  }
}
