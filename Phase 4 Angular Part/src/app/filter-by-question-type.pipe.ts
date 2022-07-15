import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByQuestionType'
})
export class FilterByQuestionTypePipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName: string): any {
    if (!items) { return [] }

    if (!searchText) { return items }

    return items.filter((item: any) => {
      if (item && item[fieldName]) {
        return item[fieldName].toLowerCase().includes(searchText);
      }

      return false;


    })

  }
}
