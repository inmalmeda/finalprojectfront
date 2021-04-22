import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTagComponent } from './selector-tag.component';

describe('SelectorTagComponent', () => {
  let component: SelectorTagComponent;
  let fixture: ComponentFixture<SelectorTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
