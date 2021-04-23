import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorGeneralComponent } from './selector-general.component';

describe('SelectorGeneralComponent', () => {
  let component: SelectorGeneralComponent;
  let fixture: ComponentFixture<SelectorGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
