import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
   pure: false
})
export class FilterPipe implements PipeTransform {

  transform(arrayItems:Object[], name:string, pattern:string): any {
    if (!arrayItems) {return []}
    if (!pattern) {return arrayItems}

    console.log(arrayItems);
    console.log(name);
    console.log(pattern);

    const myPattern = new RegExp(pattern, 'i');
    return arrayItems.filter(it => it[name].match(myPattern));
  }

}
