import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()
  public onSearch: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
