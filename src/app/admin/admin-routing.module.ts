import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistantPolicyComponent } from './assistant-policy/assistant-policy.component';

const routes: Routes = [
  { path: 'assistant-policy', component: AssistantPolicyComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
