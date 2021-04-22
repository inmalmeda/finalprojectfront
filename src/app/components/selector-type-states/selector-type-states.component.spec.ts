import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTypeStatesComponent } from './selector-type-states.component';

describe('SelectorTypeStatesComponent', () => {
  let component: SelectorTypeStatesComponent;
  let fixture: ComponentFixture<SelectorTypeStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorTypeStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorTypeStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
