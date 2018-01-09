import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value).toLocaleString('en-US', {
      style: 'currency',
      currency: args || "USD",
    });
  }

}
