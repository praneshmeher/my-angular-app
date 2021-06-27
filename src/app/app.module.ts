import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ChildEventBindingComponent } from './child-event-binding/child-event-binding.component';
import { ParentEventBindingComponent } from './parent-event-binding/parent-event-binding.component';
import { ChildPropertyBindingComponent } from './child-property-binding/child-property-binding.component'
import { ParentPropertyBindingComponent } from './parent-property-binding/parent-property-binding.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component'
import { RendererDirectiveDirective } from './renderer-directive/renderer-directive.directive'
import { AttributeDirectiveDirective } from './attribute-directive/attribute-directive.directive';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DependancyInjectonComponent } from './dependancy-injecton/dependancy-injecton.component'

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    NgIfComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
    ChildPropertyBindingComponent,
    ParentPropertyBindingComponent,
    ChildEventBindingComponent,
    ParentEventBindingComponent,
    LocalReferenceComponent,
    ViewChildComponent,
    NgContentComponent,
    LifecycleHooksComponent,
    RendererDirectiveDirective,
    AttributeDirectiveDirective,
    NgSwitchComponent,
    DependancyInjectonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
