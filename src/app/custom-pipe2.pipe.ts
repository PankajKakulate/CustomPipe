import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe2',
  standalone: true
})
export class CustomPipe2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
