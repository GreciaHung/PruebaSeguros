import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/shared/models/policy.model';

@Component({
  selector: 'app-list-policy',
  templateUrl: './list-policy.component.html',
  styleUrls: ['./list-policy.component.scss']
})
export class ListPolicyComponent implements OnInit {
  public PolicyList: Policy[];
  constructor() { }

  ngOnInit() {
    this.PolicyList = [
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200),
      new Policy(1, "Grecia Hung", "DESCRIPJFJFJJFJ", "Terremoto", "Alto", 10, new Date(), new Date(), 200)
    ]
  }

}
