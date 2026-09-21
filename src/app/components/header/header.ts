import { Component , signal  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  styleUrls: ['./header.scss'],
  templateUrl: './header.html',
})
export class HeaderComponent {
  title = signal('My first Angular App ') ; 
}
