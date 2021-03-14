import {Component, Input, OnInit} from '@angular/core';
import {CoefficientType} from '../../../../../../core/types/coefficient.type';

@Component({
  selector: 'app-coefficient',
  templateUrl: './coefficient.component.html',
  styleUrls: ['./coefficient.component.scss'],
})
export class CoefficientComponent implements OnInit {

  @Input() config: CoefficientType;

  constructor() {
  }

  ngOnInit(): void {
  }

}
