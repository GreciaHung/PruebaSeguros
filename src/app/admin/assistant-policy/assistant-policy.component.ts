import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistant-policy',
  templateUrl: './assistant-policy.component.html',
  styleUrls: ['./assistant-policy.component.scss']
})
export class AssistantPolicyComponent implements OnInit {
  TypeCovering: string[] = ['Terremoto', 'Incendio', 'Robo', 'Pérdida', 'Otros'];
  TypeRisk: string[]=['Bajo','Medio','Medio-Alto','Alto'];
  Now= new Date();
  constructor() { }

  ngOnInit() {
  }

}
