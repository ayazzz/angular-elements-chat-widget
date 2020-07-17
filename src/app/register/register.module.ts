import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChatAvatarComponent } from './chat-avatar/chat-avatar.component'
import { ChatInputComponent } from './chat-input/chat-input.component'
import { RegisterWidgetComponent } from './register-widget/register-widget.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ChatAvatarComponent, RegisterWidgetComponent, ChatInputComponent],
  exports: [RegisterWidgetComponent],
  entryComponents: [RegisterWidgetComponent],
})
export class RegisterModule { }
