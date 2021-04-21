import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScoreComponent } from './type-score.component';

describe('TypeScoreComponent', () => {
  let component: TypeScoreComponent;
  let fixture: ComponentFixture<TypeScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
