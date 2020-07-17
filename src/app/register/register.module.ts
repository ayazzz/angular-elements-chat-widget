import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterWidgetComponent } from './register-widget/register-widget.component'

@NgModule({
  imports: [CommonModule],
  declarations: [RegisterWidgetComponent],
  exports: [RegisterWidgetComponent],
  entryComponents: [RegisterWidgetComponent],
})
export class RegisterModule { }
