import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHierarchyNodeContainerComponent } from './ngx-hierarchy-node-container.component';

describe('NgxHierarchyNodeContainerComponent', () => {
  let component: NgxHierarchyNodeContainerComponent;
  let fixture: ComponentFixture<NgxHierarchyNodeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHierarchyNodeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHierarchyNodeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
