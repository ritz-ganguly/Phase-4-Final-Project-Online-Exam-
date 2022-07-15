import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResultByUserName'
})
export class FilterResultByUserNamePipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName: string): any {

    if (!items) { return [] }

    if (!searchText) { return items }


    return items.filter((item: any) => {

      if (item && item['user'][fieldName]) {

        return item['user'][fieldName].toLowerCase().includes(searchText);

      }

      return false;
    })



  }

}
