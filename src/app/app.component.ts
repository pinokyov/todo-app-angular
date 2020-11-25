import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  tasks = [
    {name: 'Create Form', action: 'No'},
    {name: 'Make Post', action: 'No'},
    {name: 'Create Form', action: 'No'}
  ];
}
