import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicagoComponentComponent } from './chicago-component.component';

describe('ChicagoComponentComponent', () => {
  let component: ChicagoComponentComponent;
  let fixture: ComponentFixture<ChicagoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChicagoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChicagoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
