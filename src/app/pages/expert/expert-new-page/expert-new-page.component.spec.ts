import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertNewPageComponent } from './expert-new-page.component';

describe('ExpertNewPageComponent', () => {
  let component: ExpertNewPageComponent;
  let fixture: ComponentFixture<ExpertNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
