import { Component } from '@angular/core';
import { CatComponent } from './core/components/cat/cat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'the-meow-signal';
}
