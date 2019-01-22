import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantPolicyComponent } from './assistant-policy.component';

describe('AssistantPolicyComponent', () => {
  let component: AssistantPolicyComponent;
  let fixture: ComponentFixture<AssistantPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
