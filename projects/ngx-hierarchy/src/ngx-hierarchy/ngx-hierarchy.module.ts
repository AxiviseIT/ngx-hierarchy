import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxHierarchyComponent } from './ngx-hierarchy/ngx-hierarchy.component';
import { NgxHierarchyNodeContainerComponent } from './ngx-hierarchy-node-container/ngx-hierarchy-node-container.component';
import { NgxHierarchyNodeComponent } from './ngx-hierarchy-node/ngx-hierarchy-node.component';



@NgModule({
  declarations: [NgxHierarchyComponent, NgxHierarchyNodeContainerComponent, NgxHierarchyNodeComponent],
  imports: [
    CommonModule
  ],
  exports:[NgxHierarchyComponent]
})
export class NgxHierarchyModule { }
