import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToggle } from './search-toggle';

describe('SearchToggle', () => {
  let component: SearchToggle;
  let fixture: ComponentFixture<SearchToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
