import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurbankComponentComponent } from './burbank-component.component';

describe('BurbankComponentComponent', () => {
  let component: BurbankComponentComponent;
  let fixture: ComponentFixture<BurbankComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurbankComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurbankComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
