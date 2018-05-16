import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeattleComponentComponent } from './seattle-component.component';

describe('SeattleComponentComponent', () => {
  let component: SeattleComponentComponent;
  let fixture: ComponentFixture<SeattleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeattleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeattleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
