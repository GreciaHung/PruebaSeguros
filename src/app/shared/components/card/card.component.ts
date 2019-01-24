import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Policy } from '../../models/policy.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input()
  public data: Policy;
  @Output()
  public OnDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  public OnEdit: EventEmitter<any> = new EventEmitter();

  public now: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  SetDate(date) {
    return new Date(date);
  }
  
  Delete() {
    this.OnDelete.emit(this.data.Id)
  }

}
