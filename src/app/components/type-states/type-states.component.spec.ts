import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeStatesComponent } from './type-states.component';

describe('TypeStatesComponent', () => {
  let component: TypeStatesComponent;
  let fixture: ComponentFixture<TypeStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
