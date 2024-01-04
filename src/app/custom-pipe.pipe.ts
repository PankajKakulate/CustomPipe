import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customPipe',
  standalone: true
})

export class CustomPipePipe implements PipeTransform {
// {{'Demo' | customPipe : "Hello" : "Angular"}}
  transform(value: unknown, ...args: unknown[]): unknown {
    if(args[0]=="PPA"){
      return "Pre-Placement Activity";
    }
    if(args[0]=="Angular"){
      return " Angular Developement"
    }
    return null;
  }

}
