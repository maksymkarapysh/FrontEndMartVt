import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {

  transform(products: any) {    
    return products.filter(products.category);
  }

}
