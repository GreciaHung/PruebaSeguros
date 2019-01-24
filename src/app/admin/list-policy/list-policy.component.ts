import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/shared/models/policy.model';
import { LoginManager } from 'src/app/shared/manager/login-manager.services';
import { ListPolicyManager } from 'src/app/shared/manager/list-policy-manager.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-policy',
  templateUrl: './list-policy.component.html',
  styleUrls: ['./list-policy.component.scss']
})
export class ListPolicyComponent implements OnInit {

  public PolicyList: Policy[];
  public loading = false;
  private subcritions = new Subscription();

  constructor(
    private loginManager: LoginManager,
    private PolicyManager: ListPolicyManager
  ) { }

  ngOnInit() {

    this.subcritions.add(this.PolicyManager.getLoading().subscribe(load => this.loading = load));

    this.subcritions.add(this.PolicyManager.getListPolicy().subscribe(list => {
      this.PolicyList = list;
    }));
  }

  ngOnDestroid() {
    this.subcritions.unsubscribe();
  }

  logout() {
    this.loginManager.Logout();
  }

  getAll() {
    this.PolicyManager.GetAllPolicy();
  }

}
