import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanJoseComponentComponent } from './san-jose-component.component';

describe('SanJoseComponentComponent', () => {
  let component: SanJoseComponentComponent;
  let fixture: ComponentFixture<SanJoseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanJoseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanJoseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
