import { Component } from '@angular/core';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CustomPipePipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
