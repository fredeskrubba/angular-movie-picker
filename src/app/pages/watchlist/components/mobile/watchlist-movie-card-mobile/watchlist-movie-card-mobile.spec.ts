import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistMovieCardMobile } from './watchlist-movie-card-mobile';

describe('WatchlistMovieCardMobile', () => {
  let component: WatchlistMovieCardMobile;
  let fixture: ComponentFixture<WatchlistMovieCardMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchlistMovieCardMobile],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchlistMovieCardMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
