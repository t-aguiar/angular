import { Component } from '@angular/core';

@Component({
  selector: 'hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.css']
})
export class Hw2Component {
  username = '';

  clearUsername()
  {
    this.username = '';
  }
}
