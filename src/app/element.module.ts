import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Injector, NgModule } from '@angular/core'

import { createCustomElement } from '@angular/elements'
import { RegisterModule, ChatWidgetComponent } from './register'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RegisterModule],
  exports: [RegisterModule]
})
export class ElementModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const registerWidget = <any>createCustomElement(ChatWidgetComponent, {
      injector: this.injector,
    })
    customElements.define('leal-register-widget', registerWidget)
  }
}
