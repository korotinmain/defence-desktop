import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-remove-airplane-dialog',
  templateUrl: './remove-airplane-dialog.component.html',
  styleUrls: ['./remove-airplane-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveAirplaneDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RemoveAirplaneDialogComponent>) {
  }

  ngOnInit(): void {
  }

  onButtonClick(isDeleteAirplane: boolean = false): void {
    isDeleteAirplane ? this.dialogRef.close(true) : this.dialogRef.close();
  }

}
