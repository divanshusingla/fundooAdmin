import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveReplyComponent } from './approve-reply.component';

describe('ApproveReplyComponent', () => {
  let component: ApproveReplyComponent;
  let fixture: ComponentFixture<ApproveReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
