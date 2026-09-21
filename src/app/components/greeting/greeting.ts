import { Component , input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-greeting',
  styleUrls: ['./greeting.scss'],
  templateUrl: './greeting.html',
})
export class Greeting {
  message = input(' Hellooooooooooooooo ') ; 
}
