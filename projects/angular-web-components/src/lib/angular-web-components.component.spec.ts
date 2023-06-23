import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWebComponentsComponent } from './angular-web-components.component';

describe('AngularWebComponentsComponent', () => {
  let component: AngularWebComponentsComponent;
  let fixture: ComponentFixture<AngularWebComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularWebComponentsComponent]
    });
    fixture = TestBed.createComponent(AngularWebComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
