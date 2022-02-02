import { Pipe, PipeTransform } from '@angular/core';
import { langMap } from './he';
@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
 
  transform(key: string, ...args: any[]): string {
    return langMap[key];
  }
}
