import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMenu } from './rating-menu';

describe('RatingMenu', () => {
  let component: RatingMenu;
  let fixture: ComponentFixture<RatingMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
