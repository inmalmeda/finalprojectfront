import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagNewPageComponent } from './tag-new-page.component';

describe('TagNewPageComponent', () => {
  let component: TagNewPageComponent;
  let fixture: ComponentFixture<TagNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
