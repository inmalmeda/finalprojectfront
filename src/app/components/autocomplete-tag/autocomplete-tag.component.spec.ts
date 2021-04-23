import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteTagComponent } from './autocomplete-tag.component';

describe('AutocompleteTagComponent', () => {
  let component: AutocompleteTagComponent;
  let fixture: ComponentFixture<AutocompleteTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
