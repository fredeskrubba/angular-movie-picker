import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardSkeleton } from './mobile-card-skeleton';

describe('MobileCardSkeleton', () => {
  let component: MobileCardSkeleton;
  let fixture: ComponentFixture<MobileCardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileCardSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileCardSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
