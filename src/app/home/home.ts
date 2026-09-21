import { Component , signal  } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting],
  styleUrls: ['./home.scss'],
  templateUrl: './home.html',
})
export class HomeComponent {
  homeMessage = signal('Hello, world ! ')
}
