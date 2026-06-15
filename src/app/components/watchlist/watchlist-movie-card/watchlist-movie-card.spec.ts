import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistMovieCard } from './watchlist-movie-card';

describe('WatchlistMovieCard', () => {
  let component: WatchlistMovieCard;
  let fixture: ComponentFixture<WatchlistMovieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchlistMovieCard],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchlistMovieCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
