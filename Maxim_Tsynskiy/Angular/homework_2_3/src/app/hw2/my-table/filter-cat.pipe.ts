import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCat'
})
export class FilterCatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
