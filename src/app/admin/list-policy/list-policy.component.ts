import { Component, OnInit, OnDestroy } from '@angular/core';
import { Policy } from 'src/app/shared/models/policy.model';
import { LoginManager } from 'src/app/shared/manager/login-manager.services';
import { ListPolicyManager } from 'src/app/shared/manager/list-policy-manager.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-policy',
  templateUrl: './list-policy.component.html',
  styleUrls: ['./list-policy.component.scss']
})
export class ListPolicyComponent implements OnInit, OnDestroy {

  public PolicyList: Policy[];
  public loading = false;
  private subcritions = new Subscription();
  

  public searchVal = "";
  public propertiesSearch = ["CustomerName","Description","TypeCover","TypeRisk",]

  constructor(
    private loginManager: LoginManager,
    private PolicyManager: ListPolicyManager
  ) { }

  ngOnInit() {

    this.subcritions.add(this.PolicyManager.getLoading().subscribe(load => this.loading = load));
    this.PolicyManager.AllPolicy();
    this.subcritions.add(this.PolicyManager.getListPolicy().subscribe(list => {
      this.PolicyList = list;
    }));
  }

  ngOnDestroy() {
    this.subcritions.unsubscribe();
  }

  logout() {
    this.loginManager.Logout();
  }

  getAll() {
    this.PolicyManager.AllPolicy();
  }

  Delete(id) {
    this.PolicyManager.DeletePolicy(id);
  }

  

}
