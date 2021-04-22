import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTypeScoreComponent } from './selector-type-score.component';

describe('SelectorTypeScoreComponent', () => {
  let component: SelectorTypeScoreComponent;
  let fixture: ComponentFixture<SelectorTypeScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorTypeScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorTypeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
