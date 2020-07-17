import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <leal-register-widget [theme]="theme"></leal-register-widget>
  `,
})
export class AppComponent {
  public theme = 'blue'
}
