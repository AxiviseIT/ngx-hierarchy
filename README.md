# NgxHierarchy

`ngx-hierarchy` is an Angular Component Module for Vertical or Horizontal Hierarchy View. Cna be useed to show parent child view, Organization structure, Tree view. with your dynamic template

## Installation

```sh
$ npm install ngx-hierarchy
```


## Component Inputs

|Name|Type|Description
|---|---|---|
|`nodes`|`INode` object|The `INode` object that contains node info mentioned below
|`direction`|`vertical` or `horizontal`| Direction of the chart top to bottom or left to right
|`template`|`TemplateRef<any>`| Angular Template to render in each node

## INode Details

|Property|Type|Description
|---|---|---
|cssClass|`string`|Custom css class to override or change node style
|childs|`INode[]`|The array of child nodes
|{otherCustomeProperty}|`any or function`|You can add any other Property or Function in each node and can use in template


### import Module in `app.module.ts`


```ts
import { NgxHierarchyModule } from 'ngx-hierarchy';
```
```ts
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxHierarchyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### `app.component.ts`

```ts
import { Component } from '@angular/core';
import { INode } from 'ngx-hierarchy';

interface custNode extends INode{
  name:string;
  position:string;
  childs?:custNode[];
  onOk:Function;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ngx-hierarchy-demo';
  nodes: custNode[] = [
    {
      name: 'Caleb Matthews',
      cssClass: 'level1',
      position: 'Chief Executive Officer',
      childs: [
        {
          name: 'Antonia Sancho',
          cssClass: 'level2',
          position: 'HR Manager'
        },
        {
          name: 'Thoms Hilty',
          cssClass: 'level2',
          position: 'Marketing Manager',
          childs: [
            {
              name: 'Eyal Matthews',
              cssClass: 'level3',
              position: 'Social Media'
            },
            {
              name: 'Adam Mark',
              cssClass: 'level3',
              position: 'Offline Marketing'
            }
          ]
        },
        {
          name: 'Barry Roy',
          cssClass: 'level2',
          position: 'Production Manager',
          childs: [
            {
              name: 'Ligia Opera',
              cssClass: 'level3',
              position: 'Supply Chain'
            },
            {
              name: 'Moran Perry',
              cssClass: 'level3',
              position: 'Operational Manager'
            }
          ]
        }
      ]
    }
  ];
  constructor(){
  }
}

```

### `app.component.html`

```html
<ngx-hierarchy [nodes]="nodes" direction="vertical" [template]="nodeTemplate">
  <ng-template #nodeTemplate let-node>
    <div class="node-template">
      <strong>{{node.position}} </strong>
      <span>{{node.name}} </span>
    </div>
  </ng-template>
</ngx-hierarchy>
```

