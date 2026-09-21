import { Component, signal } from '@angular/core';
import { HomeComponent } from './home/home';
import { HeaderComponent } from './components/header/header';

@Component({
  imports: [HomeComponent, HeaderComponent],
  selector: 'app-root',
  standalone: true,
  styles: [
    `main{
      padding: 16px;
    }`
  ],
  template: `
    <app-header></app-header>

    <main>
     <app-home></app-home>
    </main>
   
  `,
})
export class App {
  protected readonly title = signal('first-ng-app');
}
