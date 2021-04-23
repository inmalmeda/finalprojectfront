import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageExpertComponent } from './image-expert.component';

describe('ImageExpertComponent', () => {
  let component: ImageExpertComponent;
  let fixture: ComponentFixture<ImageExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
