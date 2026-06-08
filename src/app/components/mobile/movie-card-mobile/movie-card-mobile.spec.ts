import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardMobile } from './movie-card-mobile';

describe('MovieCardMobile', () => {
  let component: MovieCardMobile;
  let fixture: ComponentFixture<MovieCardMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardMobile],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
