import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injector } from '@angular/core';
import { effect } from '@angular/core';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {

  constructor(private readonly injector: Injector) {}

  readonly name = 'cat-component';

  readonly count = signal<number>(0);
  readonly showResult = signal<boolean>(false);

  increment() { this.count.update(c => c + 1 ); }
  result = computed(() => {

    return (this.showResult() ? `The count is ${this.count()}` : 'you cant see how many times you meowed')
  })

  private loggingEffect = effect(() => {
    console.log(`The count is: ${this.count()})`);
  });

  initLogger(): void {
    effect(() => {
      console.log(`the count has been updated, the newValue is: ${this.count()}`);
    }, {injector: this.injector})
  }
}
