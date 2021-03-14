import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RemoveAirplaneDialogComponent} from './remove-airplane-dialog/remove-airplane-dialog.component';

@NgModule({
  declarations: [RemoveAirplaneDialogComponent],
  imports: [CommonModule],
  exports: [RemoveAirplaneDialogComponent],
  entryComponents: [RemoveAirplaneDialogComponent],
})
export class SharedDialogsModule {
}
