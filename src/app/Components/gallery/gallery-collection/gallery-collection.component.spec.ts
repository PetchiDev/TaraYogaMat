import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCollectionComponent } from './gallery-collection.component';

describe('GalleryCollectionComponent', () => {
  let component: GalleryCollectionComponent;
  let fixture: ComponentFixture<GalleryCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryCollectionComponent]
    });
    fixture = TestBed.createComponent(GalleryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
