import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtonComponentComponent } from './washington-component.component';

describe('WashingtonComponentComponent', () => {
  let component: WashingtonComponentComponent;
  let fixture: ComponentFixture<WashingtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
