import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeButton } from './randomize-button';

describe('RandomizeButton', () => {
  let component: RandomizeButton;
  let fixture: ComponentFixture<RandomizeButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomizeButton],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomizeButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
