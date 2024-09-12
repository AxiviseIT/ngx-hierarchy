import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHierarchyComponent } from './ngx-hierarchy.component';

describe('NgxHierarchyComponent', () => {
  let component: NgxHierarchyComponent;
  let fixture: ComponentFixture<NgxHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
