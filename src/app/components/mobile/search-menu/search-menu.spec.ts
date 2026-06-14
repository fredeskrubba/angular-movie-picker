import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMenu } from './search-menu';

describe('SearchMenu', () => {
  let component: SearchMenu;
  let fixture: ComponentFixture<SearchMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
