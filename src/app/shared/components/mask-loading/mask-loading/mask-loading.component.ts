import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mask-loading',
  templateUrl: './mask-loading.component.html',
  styleUrls: ['./mask-loading.component.css']
})
export class MaskLoadingComponent implements OnInit, OnDestroy, AfterViewInit {


  @Input() loading: boolean;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
      try {
      let container = document.getElementsByTagName('app-mask-loading')[0].parentElement;
      
      container.style.position = 'relative';
      // container.style['margin-bottom'] = '24px';
    } catch (error) { }
  }

  ngOnDestroy(): void {
    if (document.getElementsByTagName('app-mask-loading')){
      let container = document.getElementsByTagName('app-mask-loading')[0].parentElement;
      container.style.position = 'inherit';
    }
  }

}

