import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div>
      <b>404: page missing</b>
      <a routerLink="/web/home">Home</a>
    </div>
  `
})
export class NoContentComponent {

}
