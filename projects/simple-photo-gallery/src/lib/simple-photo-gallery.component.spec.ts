import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePhotoGalleryComponent } from './simple-photo-gallery.component';

describe('SimplePhotoGalleryComponent', () => {
  let component: SimplePhotoGalleryComponent;
  let fixture: ComponentFixture<SimplePhotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePhotoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
