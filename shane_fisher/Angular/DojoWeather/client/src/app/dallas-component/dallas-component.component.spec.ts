import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DallasComponentComponent } from './dallas-component.component';

describe('DallasComponentComponent', () => {
  let component: DallasComponentComponent;
  let fixture: ComponentFixture<DallasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DallasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DallasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
