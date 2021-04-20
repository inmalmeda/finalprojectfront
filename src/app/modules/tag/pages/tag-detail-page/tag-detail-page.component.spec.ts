import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDetailPageComponent } from './tag-detail-page.component';

describe('TagDetailPageComponent', () => {
  let component: TagDetailPageComponent;
  let fixture: ComponentFixture<TagDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
