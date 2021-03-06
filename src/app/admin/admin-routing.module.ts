import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistantPolicyComponent } from './assistant-policy/assistant-policy.component';
import { ListPolicyComponent } from './list-policy/list-policy.component';



const routes: Routes = [ 
  { path: 'assistant-policy/:id', component: AssistantPolicyComponent},
  { path: 'list-policy', component: ListPolicyComponent   },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
