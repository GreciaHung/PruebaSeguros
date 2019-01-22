import { Component, OnInit, Input } from '@angular/core';
import {Policy} from '../../models/policy.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input()
  public data:Policy;

  constructor() { }

  ngOnInit() {
  }

}
