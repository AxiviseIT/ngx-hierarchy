import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHierarchyNodeComponent } from './ngx-hierarchy-node.component';

describe('NgxHierarchyNodeComponent', () => {
  let component: NgxHierarchyNodeComponent;
  let fixture: ComponentFixture<NgxHierarchyNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHierarchyNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHierarchyNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
