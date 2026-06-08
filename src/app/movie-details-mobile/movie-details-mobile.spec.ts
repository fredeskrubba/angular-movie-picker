import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsMobile } from './movie-details-mobile';

describe('MovieDetailsMobile', () => {
  let component: MovieDetailsMobile;
  let fixture: ComponentFixture<MovieDetailsMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsMobile],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
